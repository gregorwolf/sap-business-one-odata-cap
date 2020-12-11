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
exports.TaxExtension = exports.TaxExtensionField = exports.createTaxExtension = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[TaxExtension.build]] instead.
 */
function createTaxExtension(json) {
    return TaxExtension.build(json);
}
exports.createTaxExtension = createTaxExtension;
/**
 * TaxExtensionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var TaxExtensionField = /** @class */ (function (_super) {
    __extends(TaxExtensionField, _super);
    /**
     * Creates an instance of TaxExtensionField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function TaxExtensionField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, TaxExtension) || this;
        /**
         * Representation of the [[TaxExtension.taxId0]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId0 = new core_1.ComplexTypeStringPropertyField('TaxId0', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.taxId1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId1 = new core_1.ComplexTypeStringPropertyField('TaxId1', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.taxId2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId2 = new core_1.ComplexTypeStringPropertyField('TaxId2', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.taxId3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId3 = new core_1.ComplexTypeStringPropertyField('TaxId3', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.taxId4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId4 = new core_1.ComplexTypeStringPropertyField('TaxId4', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.taxId5]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId5 = new core_1.ComplexTypeStringPropertyField('TaxId5', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.taxId6]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId6 = new core_1.ComplexTypeStringPropertyField('TaxId6', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.taxId7]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId7 = new core_1.ComplexTypeStringPropertyField('TaxId7', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.taxId8]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId8 = new core_1.ComplexTypeStringPropertyField('TaxId8', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.taxId9]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId9 = new core_1.ComplexTypeStringPropertyField('TaxId9', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.state]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.state = new core_1.ComplexTypeStringPropertyField('State', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.county]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.county = new core_1.ComplexTypeStringPropertyField('County', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.incoterms]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.incoterms = new core_1.ComplexTypeStringPropertyField('Incoterms', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.vehicle]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vehicle = new core_1.ComplexTypeStringPropertyField('Vehicle', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.vehicleState]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vehicleState = new core_1.ComplexTypeStringPropertyField('VehicleState', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.nfRef]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.nfRef = new core_1.ComplexTypeStringPropertyField('NFRef', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.carrier]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.carrier = new core_1.ComplexTypeStringPropertyField('Carrier', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.packQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.packQuantity = new core_1.ComplexTypeNumberPropertyField('PackQuantity', _this, 'Edm.Int32');
        /**
         * Representation of the [[TaxExtension.packDescription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.packDescription = new core_1.ComplexTypeStringPropertyField('PackDescription', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.brand]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.brand = new core_1.ComplexTypeStringPropertyField('Brand', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.shipUnitNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipUnitNo = new core_1.ComplexTypeNumberPropertyField('ShipUnitNo', _this, 'Edm.Int32');
        /**
         * Representation of the [[TaxExtension.netWeight]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.netWeight = new core_1.ComplexTypeNumberPropertyField('NetWeight', _this, 'Edm.Double');
        /**
         * Representation of the [[TaxExtension.grossWeight]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.grossWeight = new core_1.ComplexTypeNumberPropertyField('GrossWeight', _this, 'Edm.Double');
        /**
         * Representation of the [[TaxExtension.streetS]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.streetS = new core_1.ComplexTypeStringPropertyField('StreetS', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.blockS]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.blockS = new core_1.ComplexTypeStringPropertyField('BlockS', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.buildingS]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.buildingS = new core_1.ComplexTypeStringPropertyField('BuildingS', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.cityS]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cityS = new core_1.ComplexTypeStringPropertyField('CityS', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.zipCodeS]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.zipCodeS = new core_1.ComplexTypeStringPropertyField('ZipCodeS', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.countyS]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.countyS = new core_1.ComplexTypeStringPropertyField('CountyS', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.stateS]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stateS = new core_1.ComplexTypeStringPropertyField('StateS', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.countryS]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.countryS = new core_1.ComplexTypeStringPropertyField('CountryS', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.streetB]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.streetB = new core_1.ComplexTypeStringPropertyField('StreetB', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.blockB]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.blockB = new core_1.ComplexTypeStringPropertyField('BlockB', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.buildingB]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.buildingB = new core_1.ComplexTypeStringPropertyField('BuildingB', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.cityB]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cityB = new core_1.ComplexTypeStringPropertyField('CityB', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.zipCodeB]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.zipCodeB = new core_1.ComplexTypeStringPropertyField('ZipCodeB', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.countyB]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.countyB = new core_1.ComplexTypeStringPropertyField('CountyB', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.stateB]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stateB = new core_1.ComplexTypeStringPropertyField('StateB', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.countryB]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.countryB = new core_1.ComplexTypeStringPropertyField('CountryB', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.importOrExport]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.importOrExport = new core_1.ComplexTypeEnumPropertyField('ImportOrExport', _this);
        /**
         * Representation of the [[TaxExtension.mainUsage]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.mainUsage = new core_1.ComplexTypeNumberPropertyField('MainUsage', _this, 'Edm.Int32');
        /**
         * Representation of the [[TaxExtension.globalLocationNumberS]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.globalLocationNumberS = new core_1.ComplexTypeStringPropertyField('GlobalLocationNumberS', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.globalLocationNumberB]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.globalLocationNumberB = new core_1.ComplexTypeStringPropertyField('GlobalLocationNumberB', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.taxId12]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId12 = new core_1.ComplexTypeStringPropertyField('TaxId12', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.taxId13]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId13 = new core_1.ComplexTypeStringPropertyField('TaxId13', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.billOfEntryNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billOfEntryNo = new core_1.ComplexTypeStringPropertyField('BillOfEntryNo', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.billOfEntryDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billOfEntryDate = new core_1.ComplexTypeDatePropertyField('BillOfEntryDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[TaxExtension.originalBillOfEntryNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.originalBillOfEntryNo = new core_1.ComplexTypeStringPropertyField('OriginalBillOfEntryNo', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.originalBillOfEntryDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.originalBillOfEntryDate = new core_1.ComplexTypeDatePropertyField('OriginalBillOfEntryDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[TaxExtension.importOrExportType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.importOrExportType = new core_1.ComplexTypeEnumPropertyField('ImportOrExportType', _this);
        /**
         * Representation of the [[TaxExtension.portCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.portCode = new core_1.ComplexTypeStringPropertyField('PortCode', _this, 'Edm.String');
        return _this;
    }
    return TaxExtensionField;
}(core_1.ComplexTypeField));
exports.TaxExtensionField = TaxExtensionField;
var TaxExtension;
(function (TaxExtension) {
    /**
     * Metadata information on all properties of the `TaxExtension` complex type.
     */
    TaxExtension._propertyMetadata = [{
            originalName: 'TaxId0',
            name: 'taxId0',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxId1',
            name: 'taxId1',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxId2',
            name: 'taxId2',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxId3',
            name: 'taxId3',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxId4',
            name: 'taxId4',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxId5',
            name: 'taxId5',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxId6',
            name: 'taxId6',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxId7',
            name: 'taxId7',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxId8',
            name: 'taxId8',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxId9',
            name: 'taxId9',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'State',
            name: 'state',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'County',
            name: 'county',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Incoterms',
            name: 'incoterms',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Vehicle',
            name: 'vehicle',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'VehicleState',
            name: 'vehicleState',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'NFRef',
            name: 'nfRef',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Carrier',
            name: 'carrier',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PackQuantity',
            name: 'packQuantity',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'PackDescription',
            name: 'packDescription',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Brand',
            name: 'brand',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ShipUnitNo',
            name: 'shipUnitNo',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'NetWeight',
            name: 'netWeight',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'GrossWeight',
            name: 'grossWeight',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'StreetS',
            name: 'streetS',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BlockS',
            name: 'blockS',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BuildingS',
            name: 'buildingS',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CityS',
            name: 'cityS',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ZipCodeS',
            name: 'zipCodeS',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CountyS',
            name: 'countyS',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'StateS',
            name: 'stateS',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CountryS',
            name: 'countryS',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'StreetB',
            name: 'streetB',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BlockB',
            name: 'blockB',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BuildingB',
            name: 'buildingB',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CityB',
            name: 'cityB',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ZipCodeB',
            name: 'zipCodeB',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CountyB',
            name: 'countyB',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'StateB',
            name: 'stateB',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CountryB',
            name: 'countryB',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ImportOrExport',
            name: 'importOrExport',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'MainUsage',
            name: 'mainUsage',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'GlobalLocationNumberS',
            name: 'globalLocationNumberS',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'GlobalLocationNumberB',
            name: 'globalLocationNumberB',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxId12',
            name: 'taxId12',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxId13',
            name: 'taxId13',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BillOfEntryNo',
            name: 'billOfEntryNo',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BillOfEntryDate',
            name: 'billOfEntryDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'OriginalBillOfEntryNo',
            name: 'originalBillOfEntryNo',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'OriginalBillOfEntryDate',
            name: 'originalBillOfEntryDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'ImportOrExportType',
            name: 'importOrExportType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'PortCode',
            name: 'portCode',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, TaxExtension);
    }
    TaxExtension.build = build;
})(TaxExtension = exports.TaxExtension || (exports.TaxExtension = {}));
//# sourceMappingURL=TaxExtension.js.map