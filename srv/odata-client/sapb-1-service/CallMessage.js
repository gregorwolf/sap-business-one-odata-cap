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
exports.CallMessage = exports.CallMessageField = exports.createCallMessage = void 0;
var CallMessageArgument_1 = require("./CallMessageArgument");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[CallMessage.build]] instead.
 */
function createCallMessage(json) {
    return CallMessage.build(json);
}
exports.createCallMessage = createCallMessage;
/**
 * CallMessageField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var CallMessageField = /** @class */ (function (_super) {
    __extends(CallMessageField, _super);
    function CallMessageField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[CallMessage.id]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.id = new v4_1.ComplexTypeNumberPropertyField('ID', _this, 'Edm.Int32');
        /**
         * Representation of the [[CallMessage.errorCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.errorCode = new v4_1.ComplexTypeStringPropertyField('ErrorCode', _this, 'Edm.String');
        /**
         * Representation of the [[CallMessage.messageBody]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.messageBody = new v4_1.ComplexTypeStringPropertyField('MessageBody', _this, 'Edm.String');
        /**
         * Representation of the [[CallMessage.creationDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creationDate = new v4_1.ComplexTypeDatePropertyField('CreationDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[CallMessage.creationTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creationTime = new v4_1.ComplexTypeNumberPropertyField('CreationTime', _this, 'Edm.Int32');
        /**
         * Representation of the [[CallMessage.callMessageArguments]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.callMessageArguments = new CallMessageArgument_1.CallMessageArgumentField('CallMessageArguments', _this);
        return _this;
    }
    return CallMessageField;
}(v4_1.ComplexTypeField));
exports.CallMessageField = CallMessageField;
var CallMessage;
(function (CallMessage) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ID: function (id) { return ({ id: v4_1.edmToTs(id, 'Edm.Int32') }); },
            ErrorCode: function (errorCode) { return ({ errorCode: v4_1.edmToTs(errorCode, 'Edm.String') }); },
            MessageBody: function (messageBody) { return ({ messageBody: v4_1.edmToTs(messageBody, 'Edm.String') }); },
            CreationDate: function (creationDate) { return ({ creationDate: v4_1.edmToTs(creationDate, 'Edm.DateTimeOffset') }); },
            CreationTime: function (creationTime) { return ({ creationTime: v4_1.edmToTs(creationTime, 'Edm.Int32') }); },
            CallMessageArguments: function (callMessageArguments) { return ({ callMessageArguments: CallMessageArgument_1.CallMessageArgument.build(callMessageArguments) }); }
        });
    }
    CallMessage.build = build;
})(CallMessage = exports.CallMessage || (exports.CallMessage = {}));
//# sourceMappingURL=CallMessage.js.map