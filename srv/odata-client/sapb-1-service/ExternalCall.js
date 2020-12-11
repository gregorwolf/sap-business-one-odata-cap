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
exports.ExternalCall = exports.ExternalCallField = exports.createExternalCall = void 0;
var CallArgument_1 = require("./CallArgument");
var CallMessage_1 = require("./CallMessage");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ExternalCall.build]] instead.
 */
function createExternalCall(json) {
    return ExternalCall.build(json);
}
exports.createExternalCall = createExternalCall;
/**
 * ExternalCallField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ExternalCallField = /** @class */ (function (_super) {
    __extends(ExternalCallField, _super);
    /**
     * Creates an instance of ExternalCallField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ExternalCallField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ExternalCall) || this;
        /**
         * Representation of the [[ExternalCall.id]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.id = new core_1.ComplexTypeNumberPropertyField('ID', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExternalCall.category]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.category = new core_1.ComplexTypeNumberPropertyField('Category', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExternalCall.status]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.status = new core_1.ComplexTypeEnumPropertyField('Status', _this);
        /**
         * Representation of the [[ExternalCall.creationDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creationDate = new core_1.ComplexTypeDatePropertyField('CreationDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ExternalCall.creationTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creationTime = new core_1.ComplexTypeNumberPropertyField('CreationTime', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExternalCall.lastUpdateDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lastUpdateDate = new core_1.ComplexTypeDatePropertyField('LastUpdateDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ExternalCall.lastUpdateTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lastUpdateTime = new core_1.ComplexTypeNumberPropertyField('LastUpdateTime', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExternalCall.lastUpdateUserCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lastUpdateUserCode = new core_1.ComplexTypeStringPropertyField('LastUpdateUserCode', _this, 'Edm.String');
        /**
         * Representation of the [[ExternalCall.callArguments]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.callArguments = new core_1.CollectionField('CallArguments', _this, CallArgument_1.CallArgument);
        /**
         * Representation of the [[ExternalCall.callMessages]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.callMessages = new core_1.CollectionField('CallMessages', _this, CallMessage_1.CallMessage);
        return _this;
    }
    return ExternalCallField;
}(core_1.ComplexTypeField));
exports.ExternalCallField = ExternalCallField;
var ExternalCall;
(function (ExternalCall) {
    /**
     * Metadata information on all properties of the `ExternalCall` complex type.
     */
    ExternalCall._propertyMetadata = [{
            originalName: 'ID',
            name: 'id',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Category',
            name: 'category',
            type: 'Edm.Int32',
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
            originalName: 'LastUpdateDate',
            name: 'lastUpdateDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'LastUpdateTime',
            name: 'lastUpdateTime',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'LastUpdateUserCode',
            name: 'lastUpdateUserCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CallArguments',
            name: 'callArguments',
            type: CallArgument_1.CallArgument,
            isCollection: true
        }, {
            originalName: 'CallMessages',
            name: 'callMessages',
            type: CallMessage_1.CallMessage,
            isCollection: true
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ExternalCall);
    }
    ExternalCall.build = build;
})(ExternalCall = exports.ExternalCall || (exports.ExternalCall = {}));
//# sourceMappingURL=ExternalCall.js.map