(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[4013],{34013:function(e,t,o){"use strict";function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}var r=o(59737).Buffer,s=o(75798),f=o(82316)._,i=o(64229);"undefined"!==typeof window&&(window.Buffer=r),"undefined"!==typeof self&&(self.Buffer=r);var a={UInt8:1,UInt16LE:2,UInt16BE:2,UInt32LE:4,UInt32BE:4,Int8:1,Int16LE:2,Int16BE:2,Int32LE:4,Int32BE:4,FloatLE:4,FloatBE:4,DoubleLE:8,DoubleBE:8,UInt64:8,Int64:8},p={},h="___parser_",u=[];!function(){var e;for(e=1;e<=32;e++)u.push(e)}();var c={};Object.keys(a).concat(Object.keys({String:null,Buffer:null,Array:null,Skip:null,Choice:null,Nest:null,Bit:null,Itf8:null,Ltf8:null})).forEach((function(e){c[e.toLowerCase()]=e}));var l=function(){this.varName="",this.type="",this.options={},this.next=null,this.head=null,this.compiled=null,this.endian="le",this.constructorFn=null,this.alias=null};l.start=function(){return new l},Object.keys(a).forEach((function(e){l.prototype[e.toLowerCase()]=function(t,o){return this.setNextParser(e.toLowerCase(),t,o)};var t=e.replace(/BE|LE/,"").toLowerCase();t in l.prototype||(l.prototype[t]=function(e,o){return this[t+this.endian](e,o)})})),u.forEach((function(e){l.prototype["bit".concat(e.toString())]=function(t,o){return o||(o={}),o.length=e,this.setNextParser("bit",t,o)}})),l.prototype.namely=function(e){return p[e]=this,this.alias=e,this},l.prototype.skip=function(e,t){if(t&&t.assert)throw new Error("assert option on skip is not allowed.");return this.setNextParser("skip","",{length:e})},l.prototype.string=function(e,t){if(!t.zeroTerminated&&!t.length&&!t.greedy)throw new Error("Neither length, zeroTerminated, nor greedy is defined for string.");if((t.zeroTerminated||t.length)&&t.greedy)throw new Error("greedy is mutually exclusive with length and zeroTerminated for string.");if(t.stripNull&&!t.length&&!t.greedy)throw new Error("Length or greedy must be defined if stripNull is defined.");return t.encoding=t.encoding||"utf8",this.setNextParser("string",e,t)},l.prototype.buffer=function(e,t){if(!t.length&&!t.readUntil)throw new Error("Length nor readUntil is defined in buffer parser");return this.setNextParser("buffer",e,t)},l.prototype.array=function(e,t){if(!t.readUntil&&!t.length&&!t.lengthInBytes)throw new Error("Length option of array is not defined.");if(!t.type)throw new Error("Type option of array is not defined.");if("string"===typeof t.type&&!p[t.type]&&Object.keys(a).indexOf(c[t.type])<0)throw new Error('Specified primitive type "'.concat(t.type,'" is not supported.'));return this.setNextParser("array",e,t)},l.prototype.choice=function(e,t){if(1===arguments.length&&"object"===n(e)&&(t=e,e=null),!t.tag)throw new Error("Tag option of array is not defined.");if(!t.choices)throw new Error("Choices option of array is not defined.");return Object.keys(t.choices).forEach((function(o){if(!t.choices[o])throw new Error("Choice Case ".concat(o," of ").concat(e," is not valid."));if("string"===typeof t.choices[o]&&!p[t.choices[o]]&&Object.keys(a).indexOf(c[t.choices[o]])<0)throw new Error('Specified primitive type "'.concat(t.choices[o],'" is not supported.'))}),this),this.setNextParser("choice",e,t)},l.prototype.nest=function(e,t){if(1===arguments.length&&"object"===n(e)&&(t=e,e=null),!t.type)throw new Error("Type option of nest is not defined.");if(!(t.type instanceof l)&&!p[t.type])throw new Error("Type option of nest must be a Parser object.");if(!(t.type instanceof l)&&!e)throw new Error("options.type must be a object if variable name is omitted.");return this.setNextParser("nest",e,t)},l.prototype.endianess=function(e){switch(e.toLowerCase()){case"little":this.endian="le";break;case"big":this.endian="be";break;default:throw new Error("Invalid endianess: ".concat(e))}return this},l.prototype.create=function(e){if(!(e instanceof Function))throw new Error("Constructor must be a Function object.");return this.constructorFn=e,this},l.prototype.getCode=function(){var e=new f;return e.pushCode("if (!Buffer.isBuffer(buffer)) {"),e.generateError('"argument buffer is not a Buffer object"'),e.pushCode("}"),this.alias?this.addAliasedCode(e):this.addRawCode(e),this.alias?e.pushCode("return {0}(0)",h+this.alias):e.pushCode("return { offset: offset, result: vars };"),e.code},l.prototype.addRawCode=function(e){e.pushCode("var offset = 0;"),this.constructorFn?e.pushCode("var vars = new constructorFn();"):e.pushCode("var vars = {};"),this.generate(e),this.resolveReferences(e),e.pushCode("return { offset: offset, result: vars };")},l.prototype.addAliasedCode=function(e){return e.pushCode("function {0}(offset) {",h+this.alias),this.constructorFn?e.pushCode("var vars = new constructorFn();"):e.pushCode("var vars = {};"),this.generate(e),e.markResolved(this.alias),this.resolveReferences(e),e.pushCode("return { offset: offset, result: vars };"),e.pushCode("}"),e},l.prototype.resolveReferences=function(e){var t=e.getUnresolvedReferences();e.markRequested(t),t.forEach((function(t){p[t].addAliasedCode(e)}))},l.prototype.compile=function(){var e="(function(buffer, constructorFn, Long) { ".concat(this.getCode()," })");this.compiled=s.runInThisContext(e)},l.prototype.sizeOf=function(){var e=NaN;if(Object.keys(a).indexOf(this.type)>=0)e=a[this.type];else if("String"===this.type&&"number"===typeof this.options.length)e=this.options.length;else if("Buffer"===this.type&&"number"===typeof this.options.length)e=this.options.length;else if("Array"===this.type&&"number"===typeof this.options.length){var t=NaN;"string"===typeof this.options.type?t=a[c[this.options.type]]:this.options.type instanceof l&&(t=this.options.type.sizeOf()),e=this.options.length*t}else"Skip"===this.type?e=this.options.length:"Nest"===this.type?e=this.options.type.sizeOf():this.type||(e=0);return this.next&&(e+=this.next.sizeOf()),e},l.prototype.parse=function(e){return this.compiled||this.compile(),this.compiled(e,this.constructorFn,i)},l.prototype.setNextParser=function(e,t,o){var n=new l;return n.type=c[e],n.varName=t,n.options=o||n.options,n.endian=this.endian,this.head?this.head.next=n:this.next=n,this.head=n,this},l.prototype.generate=function(e){this.type&&(this["generate".concat(this.type)](e),this.generateAssert(e));var t=e.generateVariable(this.varName);return this.options.formatter&&this.generateFormatter(e,t,this.options.formatter),this.generateNext(e)},l.prototype.generateAssert=function(e){if(this.options.assert){var t=e.generateVariable(this.varName);switch(n(this.options.assert)){case"function":e.pushCode("if (!({0}).call(vars, {1})) {",this.options.assert,t);break;case"number":e.pushCode("if ({0} !== {1}) {",this.options.assert,t);break;case"string":e.pushCode('if ("{0}" !== {1}) {',this.options.assert,t);break;default:throw new Error("Assert option supports only strings, numbers and assert functions.")}e.generateError('"Assert error: {0} is " + {0}',t),e.pushCode("}")}},l.prototype.generateNext=function(e){return this.next&&(e=this.next.generate(e)),e},Object.keys(a).forEach((function(e){l.prototype["generate".concat(e)]=function(t){"UInt64"===e?t.pushCode("{0} = Long.fromBytes(buffer.slice(offset,offset+8), true, this.endian === 'le').toNumber();",t.generateVariable(this.varName),e):"Int64"===e?t.pushCode("{0} = Long.fromBytes(buffer.slice(offset,offset+8), false, this.endian === 'le').toNumber();",t.generateVariable(this.varName),e):t.pushCode("{0} = buffer.read{1}(offset);",t.generateVariable(this.varName),e),t.pushCode("offset += {0};",a[e])}})),l.prototype.generateBit=function(e){var t=JSON.parse(JSON.stringify(this));if(t.varName=e.generateVariable(t.varName),e.bitFields.push(t),!this.next||this.next&&["Bit","Nest"].indexOf(this.next.type)<0){var o=0;e.bitFields.forEach((function(e){o+=e.options.length}));var n=e.generateTmpVariable();if(o<=8)e.pushCode("var {0} = buffer.readUInt8(offset);",n),o=8;else if(o<=16)e.pushCode("var {0} = buffer.readUInt16BE(offset);",n),o=16;else if(o<=24){var r=e.generateTmpVariable(),s=e.generateTmpVariable();e.pushCode("var {0} = buffer.readUInt16BE(offset);",r),e.pushCode("var {0} = buffer.readUInt8(offset + 2);",s),e.pushCode("var {2} = ({0} << 8) | {1};",r,s,n),o=24}else{if(!(o<=32))throw new Error("Currently, bit field sequence longer than 4-bytes is not supported.");e.pushCode("var {0} = buffer.readUInt32BE(offset);",n),o=32}e.pushCode("offset += {0};",o/8);var f=0,i="be"===this.endian;e.bitFields.forEach((function(t){e.pushCode("{0} = {1} >> {2} & {3};",t.varName,n,i?o-f-t.options.length:f,(1<<t.options.length)-1),f+=t.options.length})),e.bitFields=[]}},l.prototype.generateSkip=function(e){var t=e.generateOption(this.options.length);e.pushCode("offset += {0};",t)},l.prototype.generateString=function(e){var t=e.generateVariable(this.varName),o=e.generateTmpVariable();this.options.length&&this.options.zeroTerminated?(e.pushCode("var {0} = offset;",o),e.pushCode("while(buffer.readUInt8(offset++) !== 0 && offset - {0}  < {1});",o,this.options.length),e.pushCode("{0} = buffer.toString('{1}', {2}, offset - {2} < {3} ? offset - 1 : offset);",t,this.options.encoding,o,this.options.length)):this.options.length?(e.pushCode("{0} = buffer.toString('{1}', offset, offset + {2});",t,this.options.encoding,e.generateOption(this.options.length)),e.pushCode("offset += {0};",e.generateOption(this.options.length))):this.options.zeroTerminated?(e.pushCode("var {0} = offset;",o),e.pushCode("while(buffer.readUInt8(offset++) !== 0);"),e.pushCode("{0} = buffer.toString('{1}', {2}, offset - 1);",t,this.options.encoding,o)):this.options.greedy&&(e.pushCode("var {0} = offset;",o),e.pushCode("while(buffer.length > offset++);"),e.pushCode("{0} = buffer.toString('{1}', {2}, offset);",t,this.options.encoding,o)),this.options.stripNull&&e.pushCode("{0} = {0}.replace(/\\x00+$/g, '')",t)},l.prototype.generateBuffer=function(e){"eof"===this.options.readUntil?e.pushCode("{0} = buffer.slice(offset);",e.generateVariable(this.varName)):(e.pushCode("{0} = buffer.slice(offset, offset + {1});",e.generateVariable(this.varName),e.generateOption(this.options.length)),e.pushCode("offset += {0};",e.generateOption(this.options.length))),this.options.clone&&e.pushCode("{0} = Buffer.from({0});",e.generateVariable(this.varName))},l.prototype.generateArray=function(e){var t=e.generateOption(this.options.length),o=e.generateOption(this.options.lengthInBytes),n=this.options.type,r=e.generateTmpVariable(),s=e.generateVariable(this.varName),f=e.generateTmpVariable(),i=this.options.key,u="string"===typeof i;if(u?e.pushCode("{0} = {};",s):e.pushCode("{0} = [];",s),"function"===typeof this.options.readUntil?e.pushCode("do {"):"eof"===this.options.readUntil?e.pushCode("for (var {0} = 0; offset < buffer.length; {0}++) {",r):void 0!==o?e.pushCode("for (var {0} = offset; offset - {0} < {1}; ) {",r,o):e.pushCode("for (var {0} = 0; {0} < {1}; {0}++) {",r,t),"string"===typeof n)if(p[n]){var d=e.generateTmpVariable();e.pushCode("var {0} = {1}(offset);",d,h+n),e.pushCode("var {0} = {1}.result; offset = {1}.offset;",f,d),n!==this.alias&&e.addReference(n)}else e.pushCode("var {0} = buffer.read{1}(offset);",f,c[n]),e.pushCode("offset += {0};",a[c[n]]);else n instanceof l&&(e.pushCode("var {0} = {};",f),e.pushScope(f),n.generate(e),e.popScope());u?e.pushCode("{0}[{2}.{1}] = {2};",s,i,f):e.pushCode("{0}.push({1});",s,f),e.pushCode("}"),"function"===typeof this.options.readUntil&&e.pushCode(" while (!({0}).call(this, {1}, buffer.slice(offset)));",this.options.readUntil,f)},l.prototype.generateChoiceCase=function(e,t,o){if("string"===typeof o)if(p[o]){var n=e.generateTmpVariable();e.pushCode("var {0} = {1}(offset);",n,h+o),e.pushCode("{0} = {1}.result; offset = {1}.offset;",e.generateVariable(this.varName),n),o!==this.alias&&e.addReference(o)}else e.pushCode("{0} = buffer.read{1}(offset);",e.generateVariable(this.varName),c[o]),e.pushCode("offset += {0};",a[c[o]]);else o instanceof l&&(e.pushPath(t),o.generate(e),e.popPath(t))},l.prototype.generateChoice=function(e){var t=e.generateOption(this.options.tag);this.varName&&e.pushCode("{0} = {};",e.generateVariable(this.varName)),e.pushCode("switch({0}) {",t),Object.keys(this.options.choices).forEach((function(t){var o=this.options.choices[t];Number.isNaN(parseInt(t,10))?e.pushCode("case '{0}':",t):e.pushCode("case {0}:",t),this.generateChoiceCase(e,this.varName,o),e.pushCode("break;")}),this),e.pushCode("default:"),this.options.defaultChoice?this.generateChoiceCase(e,this.varName,this.options.defaultChoice):e.generateError('"Met undefined tag value " + {0} + " at choice"',t),e.pushCode("}")},l.prototype.generateNest=function(e){var t=e.generateVariable(this.varName);if(this.options.type instanceof l)this.varName&&e.pushCode("{0} = {};",t),e.pushPath(this.varName),this.options.type.generate(e),e.popPath(this.varName);else if(p[this.options.type]){var o=e.generateTmpVariable();e.pushCode("var {0} = {1}(offset);",o,h+this.options.type),e.pushCode("{0} = {1}.result; offset = {1}.offset;",t,o),this.options.type!==this.alias&&e.addReference(this.options.type)}},l.prototype.generateFormatter=function(e,t,o){"function"===typeof o&&e.pushCode("{0} = ({1}).call(this, {0});",t,o)},l.prototype.isInteger=function(){return!!this.type.match(/U?Int[8|16|32][BE|LE]?|Bit\d+/)},l.prototype.itf8=function(e,t){return this.setNextParser("itf8",e,t)},l.prototype.itf8=function(e,t){return this.setNextParser("itf8",e,t)},l.prototype.generateItf8=function(e){var t=e.generateVariable(this.varName),o=e.generateTmpVariable();e.pushCode("\n    var ".concat(o," = buffer[offset];\n    if (").concat(o," < 0x80) {\n      ").concat(t," = ").concat(o,";\n      offset += 1;\n    } else if (").concat(o," < 0xc0) {\n      ").concat(t," = ((").concat(o,"<<8) | buffer[offset+1]) & 0x3fff;\n      offset += 2;\n    } else if (").concat(o," < 0xe0) {\n      ").concat(t," = ((").concat(o,"<<16) | (buffer[offset+1]<< 8) |  buffer[offset+2]) & 0x1fffff;\n      offset += 3;\n    } else if (").concat(o," < 0xf0) {\n      ").concat(t," = ((").concat(o,"<<24) | (buffer[offset+1]<<16) | (buffer[offset+2]<<8) | buffer[offset+3]) & 0x0fffffff;\n      offset += 4\n    } else {\n      ").concat(t," = ((").concat(o," & 0x0f)<<28) | (buffer[offset+1]<<20) | (buffer[offset+2]<<12) | (buffer[offset+3]<<4) | (buffer[offset+4] & 0x0f);\n      // x=((0xff & 0x0f)<<28) | (0xff<<20) | (0xff<<12) | (0xff<<4) | (0x0f & 0x0f);\n      // TODO *val_p = uv < 0x80000000UL ? uv : -((int32_t) (0xffffffffUL - uv)) - 1;\n      offset += 5\n    }\n  "))},l.prototype.ltf8=function(e,t){return this.setNextParser("ltf8",e,t)},l.prototype.generateLtf8=function(e){var t=e.generateVariable(this.varName),o=e.generateTmpVariable();e.pushCode("\n  var ".concat(o," = buffer[offset];\n  if (").concat(o," < 0x80) {\n    ").concat(t," = ").concat(o,";\n    offset += 1;\n  } else if (").concat(o," < 0xc0) {\n    ").concat(t," = ((buffer[offset]<<8) | buffer[offset+1]) & 0x3fff;\n    offset += 2;\n  } else if (").concat(o," < 0xe0) {\n    ").concat(t," = ((buffer[offset]<<16) | (buffer[offset+1]<<8) | buffer[offset+2]) & 0x1fffff;\n    ").concat(t," = (((").concat(o," & 63) << 16) | buffer.readUInt16LE(offset + 1));\n    offset += 3;\n  } else if (").concat(o," < 0xf0) {\n    ").concat(t," = ((buffer[offset]<<24) | (buffer[offset+1]<<16) | (buffer[offset+2]<<8) | buffer[offset+3]) & 0x0fffffff;\n    offset += 4;\n  } else if (").concat(o," < 0xf8) {\n    ").concat(t," = (((buffer[offset] & 15) * Math.pow(2,32))) +\n      (buffer[offset+1]<<24) | (buffer[offset+2]<<16 | buffer[offset+3]<<8 | buffer[offset+4])\n    // TODO *val_p = uv < 0x80000000UL ? uv : -((int32_t) (0xffffffffUL - uv)) - 1;\n    offset += 5;\n  } else if (").concat(o," < 0xfc) {\n    ").concat(t," = ((((buffer[offset] & 7) << 8) | buffer[offset+1] )) * Math.pow(2,32) +\n      (buffer[offset+2]<<24) | (buffer[offset+3]<<16 | buffer[offset+4]<<8 | buffer[offset+5])\n    offset += 6;\n  } else if (").concat(o," < 0xfe) {\n    ").concat(t," = ((((buffer[offset] & 3) << 16) | buffer[offset+1]<<8 | buffer[offset+2])) * Math.pow(2,32) +\n      (buffer[offset+3]<<24) | (buffer[offset+4]<<16 | buffer[offset+5]<<8 | buffer[offset+6])\n    offset += 7;\n  } else if (").concat(o," < 0xff) {\n    ").concat(t," = Long.fromBytesBE(buffer.slice(offset+1,offset+8));\n    if (").concat(t,".greaterThan(Number.MAX_SAFE_INTEGER) || ").concat(t,".lessThan(Number.MIN_SAFE_INTEGER))\n      throw new Error('integer overflow')\n    ").concat(t," = ").concat(t,".toNumber()\n    offset += 8;\n  } else {\n    ").concat(t," = Long.fromBytesBE(buffer.slice(offset+1,offset+9));\n    if (").concat(t,".greaterThan(Number.MAX_SAFE_INTEGER) || ").concat(t,".lessThan(Number.MIN_SAFE_INTEGER))\n      throw new Error('integer overflow')\n    ").concat(t," = ").concat(t,".toNumber()\n    offset += 9;\n  }\n  "))},t._=l},82316:function(e,t){"use strict";function o(e){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}var n=function(){this.code="",this.scopes=[["vars"]],this.isAsync=!1,this.bitFields=[],this.tmpVariableCount=0,this.references={}};n.prototype.generateVariable=function(e){var t=[];for(Array.prototype.push.apply(t,this.scopes[this.scopes.length-1]);/^\$parent\./.test(e);)t.pop(),e=e.replace(/^\$parent\./,"");return e&&t.push(e),t.join(".")},n.prototype.generateOption=function(e){switch(o(e)){case"number":return e.toString();case"string":return this.generateVariable(e);case"function":return"(".concat(e,").call(").concat(this.generateVariable(),", vars)");default:return}},n.prototype.generateError=function(){var e=Array.prototype.slice.call(arguments),t=n.interpolate.apply(this,e);this.isAsync?this.pushCode("return process.nextTick(function() { callback(new Error(".concat(t,"), vars); });")):this.pushCode("throw new Error(".concat(t,");"))},n.prototype.generateTmpVariable=function(){return"$tmp".concat(this.tmpVariableCount++)},n.prototype.pushCode=function(){var e=Array.prototype.slice.call(arguments);this.code+="".concat(n.interpolate.apply(this,e),"\n")},n.prototype.pushPath=function(e){e&&this.scopes[this.scopes.length-1].push(e)},n.prototype.popPath=function(e){e&&this.scopes[this.scopes.length-1].pop()},n.prototype.pushScope=function(e){this.scopes.push([e])},n.prototype.popScope=function(){this.scopes.pop()},n.prototype.addReference=function(e){this.references[e]||(this.references[e]={resolved:!1,requested:!1})},n.prototype.markResolved=function(e){this.references[e].resolved=!0},n.prototype.markRequested=function(e){e.forEach(function(e){this.references[e].requested=!0}.bind(this))},n.prototype.getUnresolvedReferences=function(){var e=this.references;return Object.keys(this.references).filter((function(t){return!e[t].resolved&&!e[t].requested}))},n.interpolate=function(e){var t=e.match(/{\d+}/g),o=Array.prototype.slice.call(arguments,1);return t&&t.forEach((function(t){var n=parseInt(t.substr(1,t.length-2),10);e=e.replace(t,o[n].toString())})),e},t._=n},75798:function(e){e.exports.runInThisContext=function(e){return new Function("code","return eval(code);").call(globalThis,e)}}}]);
//# sourceMappingURL=4013.8d14a756.chunk.js.map