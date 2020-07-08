"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageHeader = exports.MessageHeaderField = exports.createMessageHeader = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[MessageHeader.build]] instead.
 */
function createMessageHeader(json) {
    return MessageHeader.build(json);
}
exports.createMessageHeader = createMessageHeader;
/**
 * MessageHeaderField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var MessageHeaderField = /** @class */ (function (_super) {
    __extends(MessageHeaderField, _super);
    function MessageHeaderField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[MessageHeader.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new v4_1.ComplexTypeNumberPropertyField('Code', _this, 'Edm.Int32');
        /**
         * Representation of the [[MessageHeader.receivedDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.receivedDate = new v4_1.ComplexTypeDatePropertyField('ReceivedDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[MessageHeader.receivedTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.receivedTime = new v4_1.ComplexTypeTimePropertyField('ReceivedTime', _this, 'Edm.TimeOfDay');
        /**
         * Representation of the [[MessageHeader.sentDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sentDate = new v4_1.ComplexTypeDatePropertyField('SentDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[MessageHeader.sentTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sentTime = new v4_1.ComplexTypeTimePropertyField('SentTime', _this, 'Edm.TimeOfDay');
        return _this;
    }
    return MessageHeaderField;
}(v4_1.ComplexTypeField));
exports.MessageHeaderField = MessageHeaderField;
var MessageHeader;
(function (MessageHeader) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Code: function (code) { return ({ code: v4_1.edmToTs(code, 'Edm.Int32') }); },
            ReceivedDate: function (receivedDate) { return ({ receivedDate: v4_1.edmToTs(receivedDate, 'Edm.DateTimeOffset') }); },
            ReceivedTime: function (receivedTime) { return ({ receivedTime: v4_1.edmToTs(receivedTime, 'Edm.TimeOfDay') }); },
            SentDate: function (sentDate) { return ({ sentDate: v4_1.edmToTs(sentDate, 'Edm.DateTimeOffset') }); },
            SentTime: function (sentTime) { return ({ sentTime: v4_1.edmToTs(sentTime, 'Edm.TimeOfDay') }); }
        });
    }
    MessageHeader.build = build;
})(MessageHeader = exports.MessageHeader || (exports.MessageHeader = {}));
//# sourceMappingURL=MessageHeader.js.map