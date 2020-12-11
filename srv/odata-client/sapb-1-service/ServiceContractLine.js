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
exports.ServiceContractLine = exports.ServiceContractLineField = exports.createServiceContractLine = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ServiceContractLine.build]] instead.
 */
function createServiceContractLine(json) {
    return ServiceContractLine.build(json);
}
exports.createServiceContractLine = createServiceContractLine;
/**
 * ServiceContractLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ServiceContractLineField = /** @class */ (function (_super) {
    __extends(ServiceContractLineField, _super);
    /**
     * Creates an instance of ServiceContractLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ServiceContractLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ServiceContractLine) || this;
        /**
         * Representation of the [[ServiceContractLine.lineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNum = new core_1.ComplexTypeNumberPropertyField('LineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[ServiceContractLine.manufacturerSerialNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.manufacturerSerialNum = new core_1.ComplexTypeStringPropertyField('ManufacturerSerialNum', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceContractLine.internalSerialNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.internalSerialNum = new core_1.ComplexTypeStringPropertyField('InternalSerialNum', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceContractLine.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new core_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceContractLine.itemName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemName = new core_1.ComplexTypeStringPropertyField('ItemName', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceContractLine.itemGroup]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemGroup = new core_1.ComplexTypeNumberPropertyField('ItemGroup', _this, 'Edm.Int32');
        /**
         * Representation of the [[ServiceContractLine.startDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.startDate = new core_1.ComplexTypeDatePropertyField('StartDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ServiceContractLine.endDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.endDate = new core_1.ComplexTypeDatePropertyField('EndDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ServiceContractLine.itemGroupName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemGroupName = new core_1.ComplexTypeStringPropertyField('ItemGroupName', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceContractLine.terminationDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.terminationDate = new core_1.ComplexTypeDatePropertyField('TerminationDate', _this, 'Edm.DateTimeOffset');
        return _this;
    }
    return ServiceContractLineField;
}(core_1.ComplexTypeField));
exports.ServiceContractLineField = ServiceContractLineField;
var ServiceContractLine;
(function (ServiceContractLine) {
    /**
     * Metadata information on all properties of the `ServiceContractLine` complex type.
     */
    ServiceContractLine._propertyMetadata = [{
            originalName: 'LineNum',
            name: 'lineNum',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ManufacturerSerialNum',
            name: 'manufacturerSerialNum',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'InternalSerialNum',
            name: 'internalSerialNum',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ItemCode',
            name: 'itemCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ItemName',
            name: 'itemName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ItemGroup',
            name: 'itemGroup',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'StartDate',
            name: 'startDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'EndDate',
            name: 'endDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'ItemGroupName',
            name: 'itemGroupName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TerminationDate',
            name: 'terminationDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ServiceContractLine);
    }
    ServiceContractLine.build = build;
})(ServiceContractLine = exports.ServiceContractLine || (exports.ServiceContractLine = {}));
//# sourceMappingURL=ServiceContractLine.js.map