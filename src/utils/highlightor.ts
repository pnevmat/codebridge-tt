// Original JavaScript code by Chirp Internet: chirpinternet.eu
// Please acknowledge use of this code by including this header.

interface highlightorReturnObjectType {
	targetNodes: Array<Node>;
	hiliteTag: string;
	skipTags: RegExp;
	colors: Array<string>;
	wordColor: Array<string> | [];
	colorIdx: number;
	matchRegExp: RegExp | string;
	openLeft: boolean;
	openRight: boolean;
	endRegExp: RegExp;
	breakRegExp: RegExp;
	setEndRegExp: (regex: RegExp) => void;
	setBreakRegExp: (regex: RegExp) => void;
	setMatchType: (type: string) => void;
	setRegex: (input: string) => RegExp | false;
	getRegex: () => void;
	hiliteWords: (node: any) => void;
	remove: () => void;
	apply: (input: any) => void;
}

const Hilitor = (ids: Array<string>, hilightingColors: Array<string>, tag: string | null) => {

  // private variables
  const hilightObj = ({
		targetNodes: ids.map(id => document.getElementById(id) || document.body),
  	hiliteTag: tag || "MARK",
  	skipTags: new RegExp(""),
  	colors: hilightingColors,
  	wordColor: [],
  	colorIdx: 0,
  	matchRegExp: "",
  	openLeft: false,
  	openRight: false,

  	// characters to strip from start and end of the input string
  	endRegExp: new RegExp('^[^\\w]+|[^\\w]+$', "g"),

  	// characters used to break up the input string into words
  	breakRegExp: new RegExp('[^\\w\'-]+', "g"),
		
  	setEndRegExp: function(regex: any) {
  	  this.endRegExp = regex;
  	  return this.endRegExp;
  	},

  	setBreakRegExp: function(regex: any) {
  	  this.breakRegExp = regex;
  	  return this.breakRegExp;
  	},

  	setMatchType: function(type: string)
  	{
  	  switch(type)
  	  {
  	    case "left":
  	      this.openLeft = false;
  	      this.openRight = true;
  	      break;

  	    case "right":
  	      this.openLeft = true;
  	      this.openRight = false;
  	      break;

  	    case "open":
  	      this.openLeft = this.openRight = true;
  	      break;

  	    default:
  	      this.openLeft = this.openRight = false;

  	  }
  	},

  	setRegex: function(input: string)
  	{
  	  input = input.replace(this.endRegExp, "");
  	  input = input.replace(this.breakRegExp, "|");
  	  input = input.replace(/^\||\|$/g, "");
  	  if(input) {
  	    let re = "(" + input + ")";
  	    if(!this.openLeft) {
  	      re = "\\b" + re;
  	    }
  	    if(!this.openRight) {
  	      re = re + "\\b";
  	    }
  	    this.matchRegExp = new RegExp(re, "i");
  	    return this.matchRegExp;
  	  }
  	  return false;
  	},

  	getRegex: function()
  	{
  	  let retval = this.matchRegExp.toString();
  	  retval = retval.replace(/(^\/(\\b)?|\(|\)|(\\b)?\/i$)/g, "");
  	  retval = retval.replace(/\|/g, " ");
  	  return retval;
  	},

  	// recursively apply word highlighting
  	hiliteWords: function(node: any) {
  	  if(node === undefined || !node) return;
  	  if(!this.matchRegExp) return;
  	  if(this.skipTags.test(node.nodeName)) return;

  	  if(node.hasChildNodes()) {
  	    for(var i=0; i < node.childNodes.length; i++)
  	      this.hiliteWords(node.childNodes[i]);
  	  }
  	  if(node.nodeType === 3) { // NODE_TEXT

  	    let nv = node.nodeValue
				let regs = (this.matchRegExp as RegExp).exec(nv);

  	    if(nv && regs) {

  	      if(!this.wordColor[(regs[0] as any).toLowerCase()]) {
  	        this.wordColor[(regs[0] as any).toLowerCase()] = this.colors[this.colorIdx++ % this.colors.length];
  	      }

  	      let match = document.createElement(this.hiliteTag);
  	      match.appendChild(document.createTextNode(regs[0]));
  	      match.style.backgroundColor = this.wordColor[(regs[0] as any).toLowerCase()];
  	      match.style.color = "#000";

  	      let after = node.splitText(regs.index);
  	      after.nodeValue = after.nodeValue.substring(regs[0].length);
  	      node.parentNode.insertBefore(match, after);

  	    }
  	  }
  	},

  	// remove highlighting
  	remove: function()
  	{
  	  let arr = document.getElementsByTagName(this.hiliteTag), el;
  	  while(arr.length && (el = arr[0])) {
  	    let parent = el.parentNode;
  	    parent?.replaceChild((el.firstChild as Node), el);
  	    parent?.normalize();
  	  }
  	},

  	// start highlighting at target node
  	apply: function(input: any)
  	{
  	  this.remove();
  	  if(input === undefined || !(input = input.replace(/(^\s+|\s+$)/g, ""))) {
  	    return;
  	  }
  	  if(this.setRegex(input)) {
  	    this.targetNodes.forEach(targetNode => this.hiliteWords(targetNode));
  	  }
  	  return this.matchRegExp;
  	}
	} as highlightorReturnObjectType);

	hilightObj.skipTags = new RegExp("^(?:" + hilightObj.hiliteTag + "|SCRIPT|FORM|SPAN)$")

	return hilightObj
}

export default Hilitor