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
exports.ResourceCapacityParams = exports.ResourceCapacityParamsField = exports.createResourceCapacityParams = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ResourceCapacityParams.build]] instead.
 */
function createResourceCapacityParams(json) {
    return ResourceCapacityParams.build(json);
}
exports.createResourceCapacityParams = createResourceCapacityParams;
/**
 * ResourceCapacityParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ResourceCapacityParamsField = /** @class */ (function (_super) {
    __extends(ResourceCapacityParamsField, _super);
    /**
     * Creates an instance of ResourceCapacityParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ResourceCapacityParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ResourceCapacityParams) || this;
        /**
         * Representation of the [[ResourceCapacityParams.id]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.id = new core_1.ComplexTypeNumberPropertyField('Id', _this, 'Edm.Int32');
        /**
         * Representation of the [[ResourceCapacityParams.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new core_1.ComplexTypeStringPropertyField('Code', _this, 'Edm.String');
        /**
         * Representation of the [[ResourceCapacityParams.warehouse]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehouse = new core_1.ComplexTypeStringPropertyField('Warehouse', _this, 'Edm.String');
        /**
         * Representation of the [[ResourceCapacityParams.date]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.date = new core_1.ComplexTypeDatePropertyField('Date', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ResourceCapacityParams.type]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.type = new core_1.ComplexTypeEnumPropertyField('Type', _this);
        /**
         * Representation of the [[ResourceCapacityParams.capacity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.capacity = new core_1.ComplexTypeNumberPropertyField('Capacity', _this, 'Edm.Double');
        /**
         * Representation of the [[ResourceCapacityParams.sourceType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sourceType = new core_1.ComplexTypeEnumPropertyField('SourceType', _this);
        /**
         * Representation of the [[ResourceCapacityParams.sourceEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sourceEntry = new core_1.ComplexTypeNumberPropertyField('SourceEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[ResourceCapacityParams.sourceLineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sourceLineNum = new core_1.ComplexTypeNumberPropertyField('SourceLineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[ResourceCapacityParams.baseType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseType = new core_1.ComplexTypeEnumPropertyField('BaseType', _this);
        /**
         * Representation of the [[ResourceCapacityParams.baseEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseEntry = new core_1.ComplexTypeNumberPropertyField('BaseEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[ResourceCapacityParams.baseLineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseLineNum = new core_1.ComplexTypeNumberPropertyField('BaseLineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[ResourceCapacityParams.action]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.action = new core_1.ComplexTypeEnumPropertyField('Action', _this);
        /**
         * Representation of the [[ResourceCapacityParams.owningType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.owningType = new core_1.ComplexTypeEnumPropertyField('OwningType', _this);
        /**
         * Representation of the [[ResourceCapacityParams.owningEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.owningEntry = new core_1.ComplexTypeNumberPropertyField('OwningEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[ResourceCapacityParams.owningLineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.owningLineNum = new core_1.ComplexTypeNumberPropertyField('OwningLineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[ResourceCapacityParams.revertedType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.revertedType = new core_1.ComplexTypeEnumPropertyField('RevertedType', _this);
        /**
         * Representation of the [[ResourceCapacityParams.revertedEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.revertedEntry = new core_1.ComplexTypeNumberPropertyField('RevertedEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[ResourceCapacityParams.revertedLineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.revertedLineNum = new core_1.ComplexTypeNumberPropertyField('RevertedLineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[ResourceCapacityParams.memoSource]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.memoSource = new core_1.ComplexTypeEnumPropertyField('MemoSource', _this);
        /**
         * Representation of the [[ResourceCapacityParams.memo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.memo = new core_1.ComplexTypeStringPropertyField('Memo', _this, 'Edm.String');
        /**
         * Representation of the [[ResourceCapacityParams.singleRunCapacity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.singleRunCapacity = new core_1.ComplexTypeNumberPropertyField('SingleRunCapacity', _this, 'Edm.Double');
        /**
         * Representation of the [[ResourceCapacityParams.singleRunMemoSource]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.singleRunMemoSource = new core_1.ComplexTypeEnumPropertyField('SingleRunMemoSource', _this);
        /**
         * Representation of the [[ResourceCapacityParams.singleRunMemo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.singleRunMemo = new core_1.ComplexTypeStringPropertyField('SingleRunMemo', _this, 'Edm.String');
        return _this;
    }
    return ResourceCapacityParamsField;
}(core_1.ComplexTypeField));
exports.ResourceCapacityParamsField = ResourceCapacityParamsField;
var ResourceCapacityParams;
(function (ResourceCapacityParams) {
    /**
     * Metadata information on all properties of the `ResourceCapacityParams` complex type.
     */
    ResourceCapacityParams._propertyMetadata = [{
            originalName: 'Id',
            name: 'id',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Code',
            name: 'code',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Warehouse',
            name: 'warehouse',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Date',
            name: 'date',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'Type',
            name: 'type',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Capacity',
            name: 'capacity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'SourceType',
            name: 'sourceType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'SourceEntry',
            name: 'sourceEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'SourceLineNum',
            name: 'sourceLineNum',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BaseType',
            name: 'baseType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'BaseEntry',
            name: 'baseEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BaseLineNum',
            name: 'baseLineNum',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Action',
            name: 'action',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'OwningType',
            name: 'owningType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'OwningEntry',
            name: 'owningEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'OwningLineNum',
            name: 'owningLineNum',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'RevertedType',
            name: 'revertedType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'RevertedEntry',
            name: 'revertedEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'RevertedLineNum',
            name: 'revertedLineNum',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'MemoSource',
            name: 'memoSource',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Memo',
            name: 'memo',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'SingleRunCapacity',
            name: 'singleRunCapacity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'SingleRunMemoSource',
            name: 'singleRunMemoSource',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'SingleRunMemo',
            name: 'singleRunMemo',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ResourceCapacityParams);
    }
    ResourceCapacityParams.build = build;
})(ResourceCapacityParams = exports.ResourceCapacityParams || (exports.ResourceCapacityParams = {}));
//# sourceMappingURL=ResourceCapacityParams.js.map