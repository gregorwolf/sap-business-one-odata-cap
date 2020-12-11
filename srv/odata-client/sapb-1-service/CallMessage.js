"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of CallMessageField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function CallMessageField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, CallMessage) || this;
        /**
         * Representation of the [[CallMessage.id]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.id = new core_1.ComplexTypeNumberPropertyField('ID', _this, 'Edm.Int32');
        /**
         * Representation of the [[CallMessage.type]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.type = new core_1.ComplexTypeEnumPropertyField('Type', _this);
        /**
         * Representation of the [[CallMessage.errorCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.errorCode = new core_1.ComplexTypeStringPropertyField('ErrorCode', _this, 'Edm.String');
        /**
         * Representation of the [[CallMessage.messageBody]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.messageBody = new core_1.ComplexTypeStringPropertyField('MessageBody', _this, 'Edm.String');
        /**
         * Representation of the [[CallMessage.status]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.status = new core_1.ComplexTypeEnumPropertyField('Status', _this);
        /**
         * Representation of the [[CallMessage.creationDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creationDate = new core_1.ComplexTypeDatePropertyField('CreationDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[CallMessage.creationTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creationTime = new core_1.ComplexTypeNumberPropertyField('CreationTime', _this, 'Edm.Int32');
        /**
         * Representation of the [[CallMessage.callMessageArguments]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.callMessageArguments = new core_1.CollectionField('CallMessageArguments', _this, CallMessageArgument_1.CallMessageArgument);
        return _this;
    }
    return CallMessageField;
}(core_1.ComplexTypeField));
exports.CallMessageField = CallMessageField;
var CallMessage;
(function (CallMessage) {
    /**
     * Metadata information on all properties of the `CallMessage` complex type.
     */
    CallMessage._propertyMetadata = [{
            originalName: 'ID',
            name: 'id',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Type',
            name: 'type',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ErrorCode',
            name: 'errorCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'MessageBody',
            name: 'messageBody',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Status',
            name: 'status',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'CreationDate',
            name: 'creationDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'CreationTime',
            name: 'creationTime',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'CallMessageArguments',
            name: 'callMessageArguments',
            type: CallMessageArgument_1.CallMessageArgument,
            isCollection: true
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, CallMessage);
    }
    CallMessage.build = build;
})(CallMessage = exports.CallMessage || (exports.CallMessage = {}));
//# sourceMappingURL=CallMessage.js.map