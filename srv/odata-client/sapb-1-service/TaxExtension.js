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
exports.TaxExtension = exports.TaxExtensionField = exports.createTaxExtension = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function TaxExtensionField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[TaxExtension.taxId0]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId0 = new v4_1.ComplexTypeStringPropertyField('TaxId0', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.taxId1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId1 = new v4_1.ComplexTypeStringPropertyField('TaxId1', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.taxId2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId2 = new v4_1.ComplexTypeStringPropertyField('TaxId2', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.taxId3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId3 = new v4_1.ComplexTypeStringPropertyField('TaxId3', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.taxId4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId4 = new v4_1.ComplexTypeStringPropertyField('TaxId4', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.taxId5]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId5 = new v4_1.ComplexTypeStringPropertyField('TaxId5', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.taxId6]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId6 = new v4_1.ComplexTypeStringPropertyField('TaxId6', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.taxId7]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId7 = new v4_1.ComplexTypeStringPropertyField('TaxId7', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.taxId8]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId8 = new v4_1.ComplexTypeStringPropertyField('TaxId8', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.taxId9]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId9 = new v4_1.ComplexTypeStringPropertyField('TaxId9', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.state]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.state = new v4_1.ComplexTypeStringPropertyField('State', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.county]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.county = new v4_1.ComplexTypeStringPropertyField('County', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.incoterms]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.incoterms = new v4_1.ComplexTypeStringPropertyField('Incoterms', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.vehicle]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vehicle = new v4_1.ComplexTypeStringPropertyField('Vehicle', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.vehicleState]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vehicleState = new v4_1.ComplexTypeStringPropertyField('VehicleState', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.nfRef]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.nfRef = new v4_1.ComplexTypeStringPropertyField('NFRef', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.carrier]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.carrier = new v4_1.ComplexTypeStringPropertyField('Carrier', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.packQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.packQuantity = new v4_1.ComplexTypeNumberPropertyField('PackQuantity', _this, 'Edm.Int32');
        /**
         * Representation of the [[TaxExtension.packDescription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.packDescription = new v4_1.ComplexTypeStringPropertyField('PackDescription', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.brand]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.brand = new v4_1.ComplexTypeStringPropertyField('Brand', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.shipUnitNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipUnitNo = new v4_1.ComplexTypeNumberPropertyField('ShipUnitNo', _this, 'Edm.Int32');
        /**
         * Representation of the [[TaxExtension.netWeight]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.netWeight = new v4_1.ComplexTypeNumberPropertyField('NetWeight', _this, 'Edm.Double');
        /**
         * Representation of the [[TaxExtension.grossWeight]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.grossWeight = new v4_1.ComplexTypeNumberPropertyField('GrossWeight', _this, 'Edm.Double');
        /**
         * Representation of the [[TaxExtension.streetS]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.streetS = new v4_1.ComplexTypeStringPropertyField('StreetS', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.blockS]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.blockS = new v4_1.ComplexTypeStringPropertyField('BlockS', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.buildingS]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.buildingS = new v4_1.ComplexTypeStringPropertyField('BuildingS', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.cityS]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cityS = new v4_1.ComplexTypeStringPropertyField('CityS', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.zipCodeS]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.zipCodeS = new v4_1.ComplexTypeStringPropertyField('ZipCodeS', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.countyS]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.countyS = new v4_1.ComplexTypeStringPropertyField('CountyS', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.stateS]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stateS = new v4_1.ComplexTypeStringPropertyField('StateS', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.countryS]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.countryS = new v4_1.ComplexTypeStringPropertyField('CountryS', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.streetB]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.streetB = new v4_1.ComplexTypeStringPropertyField('StreetB', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.blockB]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.blockB = new v4_1.ComplexTypeStringPropertyField('BlockB', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.buildingB]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.buildingB = new v4_1.ComplexTypeStringPropertyField('BuildingB', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.cityB]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cityB = new v4_1.ComplexTypeStringPropertyField('CityB', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.zipCodeB]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.zipCodeB = new v4_1.ComplexTypeStringPropertyField('ZipCodeB', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.countyB]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.countyB = new v4_1.ComplexTypeStringPropertyField('CountyB', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.stateB]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stateB = new v4_1.ComplexTypeStringPropertyField('StateB', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.countryB]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.countryB = new v4_1.ComplexTypeStringPropertyField('CountryB', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.mainUsage]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.mainUsage = new v4_1.ComplexTypeNumberPropertyField('MainUsage', _this, 'Edm.Int32');
        /**
         * Representation of the [[TaxExtension.globalLocationNumberS]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.globalLocationNumberS = new v4_1.ComplexTypeStringPropertyField('GlobalLocationNumberS', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.globalLocationNumberB]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.globalLocationNumberB = new v4_1.ComplexTypeStringPropertyField('GlobalLocationNumberB', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.taxId12]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId12 = new v4_1.ComplexTypeStringPropertyField('TaxId12', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.taxId13]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId13 = new v4_1.ComplexTypeStringPropertyField('TaxId13', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.billOfEntryNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billOfEntryNo = new v4_1.ComplexTypeStringPropertyField('BillOfEntryNo', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.billOfEntryDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billOfEntryDate = new v4_1.ComplexTypeDatePropertyField('BillOfEntryDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[TaxExtension.originalBillOfEntryNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.originalBillOfEntryNo = new v4_1.ComplexTypeStringPropertyField('OriginalBillOfEntryNo', _this, 'Edm.String');
        /**
         * Representation of the [[TaxExtension.originalBillOfEntryDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.originalBillOfEntryDate = new v4_1.ComplexTypeDatePropertyField('OriginalBillOfEntryDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[TaxExtension.portCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.portCode = new v4_1.ComplexTypeStringPropertyField('PortCode', _this, 'Edm.String');
        return _this;
    }
    return TaxExtensionField;
}(v4_1.ComplexTypeField));
exports.TaxExtensionField = TaxExtensionField;
var TaxExtension;
(function (TaxExtension) {
    function build(json) {
        return v4_1.createComplexType(json, {
            TaxId0: function (taxId0) { return ({ taxId0: v4_1.edmToTs(taxId0, 'Edm.String') }); },
            TaxId1: function (taxId1) { return ({ taxId1: v4_1.edmToTs(taxId1, 'Edm.String') }); },
            TaxId2: function (taxId2) { return ({ taxId2: v4_1.edmToTs(taxId2, 'Edm.String') }); },
            TaxId3: function (taxId3) { return ({ taxId3: v4_1.edmToTs(taxId3, 'Edm.String') }); },
            TaxId4: function (taxId4) { return ({ taxId4: v4_1.edmToTs(taxId4, 'Edm.String') }); },
            TaxId5: function (taxId5) { return ({ taxId5: v4_1.edmToTs(taxId5, 'Edm.String') }); },
            TaxId6: function (taxId6) { return ({ taxId6: v4_1.edmToTs(taxId6, 'Edm.String') }); },
            TaxId7: function (taxId7) { return ({ taxId7: v4_1.edmToTs(taxId7, 'Edm.String') }); },
            TaxId8: function (taxId8) { return ({ taxId8: v4_1.edmToTs(taxId8, 'Edm.String') }); },
            TaxId9: function (taxId9) { return ({ taxId9: v4_1.edmToTs(taxId9, 'Edm.String') }); },
            State: function (state) { return ({ state: v4_1.edmToTs(state, 'Edm.String') }); },
            County: function (county) { return ({ county: v4_1.edmToTs(county, 'Edm.String') }); },
            Incoterms: function (incoterms) { return ({ incoterms: v4_1.edmToTs(incoterms, 'Edm.String') }); },
            Vehicle: function (vehicle) { return ({ vehicle: v4_1.edmToTs(vehicle, 'Edm.String') }); },
            VehicleState: function (vehicleState) { return ({ vehicleState: v4_1.edmToTs(vehicleState, 'Edm.String') }); },
            NFRef: function (nfRef) { return ({ nfRef: v4_1.edmToTs(nfRef, 'Edm.String') }); },
            Carrier: function (carrier) { return ({ carrier: v4_1.edmToTs(carrier, 'Edm.String') }); },
            PackQuantity: function (packQuantity) { return ({ packQuantity: v4_1.edmToTs(packQuantity, 'Edm.Int32') }); },
            PackDescription: function (packDescription) { return ({ packDescription: v4_1.edmToTs(packDescription, 'Edm.String') }); },
            Brand: function (brand) { return ({ brand: v4_1.edmToTs(brand, 'Edm.String') }); },
            ShipUnitNo: function (shipUnitNo) { return ({ shipUnitNo: v4_1.edmToTs(shipUnitNo, 'Edm.Int32') }); },
            NetWeight: function (netWeight) { return ({ netWeight: v4_1.edmToTs(netWeight, 'Edm.Double') }); },
            GrossWeight: function (grossWeight) { return ({ grossWeight: v4_1.edmToTs(grossWeight, 'Edm.Double') }); },
            StreetS: function (streetS) { return ({ streetS: v4_1.edmToTs(streetS, 'Edm.String') }); },
            BlockS: function (blockS) { return ({ blockS: v4_1.edmToTs(blockS, 'Edm.String') }); },
            BuildingS: function (buildingS) { return ({ buildingS: v4_1.edmToTs(buildingS, 'Edm.String') }); },
            CityS: function (cityS) { return ({ cityS: v4_1.edmToTs(cityS, 'Edm.String') }); },
            ZipCodeS: function (zipCodeS) { return ({ zipCodeS: v4_1.edmToTs(zipCodeS, 'Edm.String') }); },
            CountyS: function (countyS) { return ({ countyS: v4_1.edmToTs(countyS, 'Edm.String') }); },
            StateS: function (stateS) { return ({ stateS: v4_1.edmToTs(stateS, 'Edm.String') }); },
            CountryS: function (countryS) { return ({ countryS: v4_1.edmToTs(countryS, 'Edm.String') }); },
            StreetB: function (streetB) { return ({ streetB: v4_1.edmToTs(streetB, 'Edm.String') }); },
            BlockB: function (blockB) { return ({ blockB: v4_1.edmToTs(blockB, 'Edm.String') }); },
            BuildingB: function (buildingB) { return ({ buildingB: v4_1.edmToTs(buildingB, 'Edm.String') }); },
            CityB: function (cityB) { return ({ cityB: v4_1.edmToTs(cityB, 'Edm.String') }); },
            ZipCodeB: function (zipCodeB) { return ({ zipCodeB: v4_1.edmToTs(zipCodeB, 'Edm.String') }); },
            CountyB: function (countyB) { return ({ countyB: v4_1.edmToTs(countyB, 'Edm.String') }); },
            StateB: function (stateB) { return ({ stateB: v4_1.edmToTs(stateB, 'Edm.String') }); },
            CountryB: function (countryB) { return ({ countryB: v4_1.edmToTs(countryB, 'Edm.String') }); },
            MainUsage: function (mainUsage) { return ({ mainUsage: v4_1.edmToTs(mainUsage, 'Edm.Int32') }); },
            GlobalLocationNumberS: function (globalLocationNumberS) { return ({ globalLocationNumberS: v4_1.edmToTs(globalLocationNumberS, 'Edm.String') }); },
            GlobalLocationNumberB: function (globalLocationNumberB) { return ({ globalLocationNumberB: v4_1.edmToTs(globalLocationNumberB, 'Edm.String') }); },
            TaxId12: function (taxId12) { return ({ taxId12: v4_1.edmToTs(taxId12, 'Edm.String') }); },
            TaxId13: function (taxId13) { return ({ taxId13: v4_1.edmToTs(taxId13, 'Edm.String') }); },
            BillOfEntryNo: function (billOfEntryNo) { return ({ billOfEntryNo: v4_1.edmToTs(billOfEntryNo, 'Edm.String') }); },
            BillOfEntryDate: function (billOfEntryDate) { return ({ billOfEntryDate: v4_1.edmToTs(billOfEntryDate, 'Edm.DateTimeOffset') }); },
            OriginalBillOfEntryNo: function (originalBillOfEntryNo) { return ({ originalBillOfEntryNo: v4_1.edmToTs(originalBillOfEntryNo, 'Edm.String') }); },
            OriginalBillOfEntryDate: function (originalBillOfEntryDate) { return ({ originalBillOfEntryDate: v4_1.edmToTs(originalBillOfEntryDate, 'Edm.DateTimeOffset') }); },
            PortCode: function (portCode) { return ({ portCode: v4_1.edmToTs(portCode, 'Edm.String') }); }
        });
    }
    TaxExtension.build = build;
})(TaxExtension = exports.TaxExtension || (exports.TaxExtension = {}));
//# sourceMappingURL=TaxExtension.js.map