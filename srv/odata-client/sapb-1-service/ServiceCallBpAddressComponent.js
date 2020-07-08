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
exports.ServiceCallBpAddressComponent = exports.ServiceCallBpAddressComponentField = exports.createServiceCallBpAddressComponent = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ServiceCallBpAddressComponent.build]] instead.
 */
function createServiceCallBpAddressComponent(json) {
    return ServiceCallBpAddressComponent.build(json);
}
exports.createServiceCallBpAddressComponent = createServiceCallBpAddressComponent;
/**
 * ServiceCallBpAddressComponentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ServiceCallBpAddressComponentField = /** @class */ (function (_super) {
    __extends(ServiceCallBpAddressComponentField, _super);
    function ServiceCallBpAddressComponentField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ServiceCallBpAddressComponent.shipToStreet]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToStreet = new v4_1.ComplexTypeStringPropertyField('ShipToStreet', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.shipToStreetNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToStreetNo = new v4_1.ComplexTypeStringPropertyField('ShipToStreetNo', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.shipToBlock]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToBlock = new v4_1.ComplexTypeStringPropertyField('ShipToBlock', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.shipToBuilding]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToBuilding = new v4_1.ComplexTypeStringPropertyField('ShipToBuilding', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.shipToCity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToCity = new v4_1.ComplexTypeStringPropertyField('ShipToCity', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.shipToZipCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToZipCode = new v4_1.ComplexTypeStringPropertyField('ShipToZipCode', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.shipToState]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToState = new v4_1.ComplexTypeStringPropertyField('ShipToState', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.shipToCounty]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToCounty = new v4_1.ComplexTypeStringPropertyField('ShipToCounty', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.shipToCountry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToCountry = new v4_1.ComplexTypeStringPropertyField('ShipToCountry', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.shipToAddressType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToAddressType = new v4_1.ComplexTypeStringPropertyField('ShipToAddressType', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.shipToAddress2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToAddress2 = new v4_1.ComplexTypeStringPropertyField('ShipToAddress2', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.shipToAddress3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToAddress3 = new v4_1.ComplexTypeStringPropertyField('ShipToAddress3', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.shipToGlobalLocationNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToGlobalLocationNumber = new v4_1.ComplexTypeStringPropertyField('ShipToGlobalLocationNumber', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.billToStreet]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billToStreet = new v4_1.ComplexTypeStringPropertyField('BillToStreet', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.billToStreetNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billToStreetNo = new v4_1.ComplexTypeStringPropertyField('BillToStreetNo', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.billToBlock]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billToBlock = new v4_1.ComplexTypeStringPropertyField('BillToBlock', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.billToBuilding]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billToBuilding = new v4_1.ComplexTypeStringPropertyField('BillToBuilding', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.billToCity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billToCity = new v4_1.ComplexTypeStringPropertyField('BillToCity', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.billToZipCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billToZipCode = new v4_1.ComplexTypeStringPropertyField('BillToZipCode', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.billToState]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billToState = new v4_1.ComplexTypeStringPropertyField('BillToState', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.billToCounty]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billToCounty = new v4_1.ComplexTypeStringPropertyField('BillToCounty', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.billToCountry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billToCountry = new v4_1.ComplexTypeStringPropertyField('BillToCountry', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.billToAddressType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billToAddressType = new v4_1.ComplexTypeStringPropertyField('BillToAddressType', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.billToAddress2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billToAddress2 = new v4_1.ComplexTypeStringPropertyField('BillToAddress2', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.billToAddress3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billToAddress3 = new v4_1.ComplexTypeStringPropertyField('BillToAddress3', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.billToGlobalLocationNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billToGlobalLocationNumber = new v4_1.ComplexTypeStringPropertyField('BillToGlobalLocationNumber', _this, 'Edm.String');
        return _this;
    }
    return ServiceCallBpAddressComponentField;
}(v4_1.ComplexTypeField));
exports.ServiceCallBpAddressComponentField = ServiceCallBpAddressComponentField;
var ServiceCallBpAddressComponent;
(function (ServiceCallBpAddressComponent) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ShipToStreet: function (shipToStreet) { return ({ shipToStreet: v4_1.edmToTs(shipToStreet, 'Edm.String') }); },
            ShipToStreetNo: function (shipToStreetNo) { return ({ shipToStreetNo: v4_1.edmToTs(shipToStreetNo, 'Edm.String') }); },
            ShipToBlock: function (shipToBlock) { return ({ shipToBlock: v4_1.edmToTs(shipToBlock, 'Edm.String') }); },
            ShipToBuilding: function (shipToBuilding) { return ({ shipToBuilding: v4_1.edmToTs(shipToBuilding, 'Edm.String') }); },
            ShipToCity: function (shipToCity) { return ({ shipToCity: v4_1.edmToTs(shipToCity, 'Edm.String') }); },
            ShipToZipCode: function (shipToZipCode) { return ({ shipToZipCode: v4_1.edmToTs(shipToZipCode, 'Edm.String') }); },
            ShipToState: function (shipToState) { return ({ shipToState: v4_1.edmToTs(shipToState, 'Edm.String') }); },
            ShipToCounty: function (shipToCounty) { return ({ shipToCounty: v4_1.edmToTs(shipToCounty, 'Edm.String') }); },
            ShipToCountry: function (shipToCountry) { return ({ shipToCountry: v4_1.edmToTs(shipToCountry, 'Edm.String') }); },
            ShipToAddressType: function (shipToAddressType) { return ({ shipToAddressType: v4_1.edmToTs(shipToAddressType, 'Edm.String') }); },
            ShipToAddress2: function (shipToAddress2) { return ({ shipToAddress2: v4_1.edmToTs(shipToAddress2, 'Edm.String') }); },
            ShipToAddress3: function (shipToAddress3) { return ({ shipToAddress3: v4_1.edmToTs(shipToAddress3, 'Edm.String') }); },
            ShipToGlobalLocationNumber: function (shipToGlobalLocationNumber) { return ({ shipToGlobalLocationNumber: v4_1.edmToTs(shipToGlobalLocationNumber, 'Edm.String') }); },
            BillToStreet: function (billToStreet) { return ({ billToStreet: v4_1.edmToTs(billToStreet, 'Edm.String') }); },
            BillToStreetNo: function (billToStreetNo) { return ({ billToStreetNo: v4_1.edmToTs(billToStreetNo, 'Edm.String') }); },
            BillToBlock: function (billToBlock) { return ({ billToBlock: v4_1.edmToTs(billToBlock, 'Edm.String') }); },
            BillToBuilding: function (billToBuilding) { return ({ billToBuilding: v4_1.edmToTs(billToBuilding, 'Edm.String') }); },
            BillToCity: function (billToCity) { return ({ billToCity: v4_1.edmToTs(billToCity, 'Edm.String') }); },
            BillToZipCode: function (billToZipCode) { return ({ billToZipCode: v4_1.edmToTs(billToZipCode, 'Edm.String') }); },
            BillToState: function (billToState) { return ({ billToState: v4_1.edmToTs(billToState, 'Edm.String') }); },
            BillToCounty: function (billToCounty) { return ({ billToCounty: v4_1.edmToTs(billToCounty, 'Edm.String') }); },
            BillToCountry: function (billToCountry) { return ({ billToCountry: v4_1.edmToTs(billToCountry, 'Edm.String') }); },
            BillToAddressType: function (billToAddressType) { return ({ billToAddressType: v4_1.edmToTs(billToAddressType, 'Edm.String') }); },
            BillToAddress2: function (billToAddress2) { return ({ billToAddress2: v4_1.edmToTs(billToAddress2, 'Edm.String') }); },
            BillToAddress3: function (billToAddress3) { return ({ billToAddress3: v4_1.edmToTs(billToAddress3, 'Edm.String') }); },
            BillToGlobalLocationNumber: function (billToGlobalLocationNumber) { return ({ billToGlobalLocationNumber: v4_1.edmToTs(billToGlobalLocationNumber, 'Edm.String') }); }
        });
    }
    ServiceCallBpAddressComponent.build = build;
})(ServiceCallBpAddressComponent = exports.ServiceCallBpAddressComponent || (exports.ServiceCallBpAddressComponent = {}));
//# sourceMappingURL=ServiceCallBpAddressComponent.js.map