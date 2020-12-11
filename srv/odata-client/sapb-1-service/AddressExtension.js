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
exports.AddressExtension = exports.AddressExtensionField = exports.createAddressExtension = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[AddressExtension.build]] instead.
 */
function createAddressExtension(json) {
    return AddressExtension.build(json);
}
exports.createAddressExtension = createAddressExtension;
/**
 * AddressExtensionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var AddressExtensionField = /** @class */ (function (_super) {
    __extends(AddressExtensionField, _super);
    /**
     * Creates an instance of AddressExtensionField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function AddressExtensionField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, AddressExtension) || this;
        /**
         * Representation of the [[AddressExtension.shipToStreet]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToStreet = new core_1.ComplexTypeStringPropertyField('ShipToStreet', _this, 'Edm.String');
        /**
         * Representation of the [[AddressExtension.shipToStreetNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToStreetNo = new core_1.ComplexTypeStringPropertyField('ShipToStreetNo', _this, 'Edm.String');
        /**
         * Representation of the [[AddressExtension.shipToBlock]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToBlock = new core_1.ComplexTypeStringPropertyField('ShipToBlock', _this, 'Edm.String');
        /**
         * Representation of the [[AddressExtension.shipToBuilding]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToBuilding = new core_1.ComplexTypeStringPropertyField('ShipToBuilding', _this, 'Edm.String');
        /**
         * Representation of the [[AddressExtension.shipToCity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToCity = new core_1.ComplexTypeStringPropertyField('ShipToCity', _this, 'Edm.String');
        /**
         * Representation of the [[AddressExtension.shipToZipCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToZipCode = new core_1.ComplexTypeStringPropertyField('ShipToZipCode', _this, 'Edm.String');
        /**
         * Representation of the [[AddressExtension.shipToCounty]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToCounty = new core_1.ComplexTypeStringPropertyField('ShipToCounty', _this, 'Edm.String');
        /**
         * Representation of the [[AddressExtension.shipToState]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToState = new core_1.ComplexTypeStringPropertyField('ShipToState', _this, 'Edm.String');
        /**
         * Representation of the [[AddressExtension.shipToCountry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToCountry = new core_1.ComplexTypeStringPropertyField('ShipToCountry', _this, 'Edm.String');
        /**
         * Representation of the [[AddressExtension.shipToAddressType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToAddressType = new core_1.ComplexTypeStringPropertyField('ShipToAddressType', _this, 'Edm.String');
        /**
         * Representation of the [[AddressExtension.billToStreet]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billToStreet = new core_1.ComplexTypeStringPropertyField('BillToStreet', _this, 'Edm.String');
        /**
         * Representation of the [[AddressExtension.billToStreetNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billToStreetNo = new core_1.ComplexTypeStringPropertyField('BillToStreetNo', _this, 'Edm.String');
        /**
         * Representation of the [[AddressExtension.billToBlock]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billToBlock = new core_1.ComplexTypeStringPropertyField('BillToBlock', _this, 'Edm.String');
        /**
         * Representation of the [[AddressExtension.billToBuilding]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billToBuilding = new core_1.ComplexTypeStringPropertyField('BillToBuilding', _this, 'Edm.String');
        /**
         * Representation of the [[AddressExtension.billToCity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billToCity = new core_1.ComplexTypeStringPropertyField('BillToCity', _this, 'Edm.String');
        /**
         * Representation of the [[AddressExtension.billToZipCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billToZipCode = new core_1.ComplexTypeStringPropertyField('BillToZipCode', _this, 'Edm.String');
        /**
         * Representation of the [[AddressExtension.billToCounty]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billToCounty = new core_1.ComplexTypeStringPropertyField('BillToCounty', _this, 'Edm.String');
        /**
         * Representation of the [[AddressExtension.billToState]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billToState = new core_1.ComplexTypeStringPropertyField('BillToState', _this, 'Edm.String');
        /**
         * Representation of the [[AddressExtension.billToCountry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billToCountry = new core_1.ComplexTypeStringPropertyField('BillToCountry', _this, 'Edm.String');
        /**
         * Representation of the [[AddressExtension.billToAddressType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billToAddressType = new core_1.ComplexTypeStringPropertyField('BillToAddressType', _this, 'Edm.String');
        /**
         * Representation of the [[AddressExtension.shipToGlobalLocationNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToGlobalLocationNumber = new core_1.ComplexTypeStringPropertyField('ShipToGlobalLocationNumber', _this, 'Edm.String');
        /**
         * Representation of the [[AddressExtension.billToGlobalLocationNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billToGlobalLocationNumber = new core_1.ComplexTypeStringPropertyField('BillToGlobalLocationNumber', _this, 'Edm.String');
        /**
         * Representation of the [[AddressExtension.shipToAddress2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToAddress2 = new core_1.ComplexTypeStringPropertyField('ShipToAddress2', _this, 'Edm.String');
        /**
         * Representation of the [[AddressExtension.shipToAddress3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToAddress3 = new core_1.ComplexTypeStringPropertyField('ShipToAddress3', _this, 'Edm.String');
        /**
         * Representation of the [[AddressExtension.billToAddress2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billToAddress2 = new core_1.ComplexTypeStringPropertyField('BillToAddress2', _this, 'Edm.String');
        /**
         * Representation of the [[AddressExtension.billToAddress3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billToAddress3 = new core_1.ComplexTypeStringPropertyField('BillToAddress3', _this, 'Edm.String');
        /**
         * Representation of the [[AddressExtension.placeOfSupply]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.placeOfSupply = new core_1.ComplexTypeStringPropertyField('PlaceOfSupply', _this, 'Edm.String');
        return _this;
    }
    return AddressExtensionField;
}(core_1.ComplexTypeField));
exports.AddressExtensionField = AddressExtensionField;
var AddressExtension;
(function (AddressExtension) {
    /**
     * Metadata information on all properties of the `AddressExtension` complex type.
     */
    AddressExtension._propertyMetadata = [{
            originalName: 'ShipToStreet',
            name: 'shipToStreet',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ShipToStreetNo',
            name: 'shipToStreetNo',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ShipToBlock',
            name: 'shipToBlock',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ShipToBuilding',
            name: 'shipToBuilding',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ShipToCity',
            name: 'shipToCity',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ShipToZipCode',
            name: 'shipToZipCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ShipToCounty',
            name: 'shipToCounty',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ShipToState',
            name: 'shipToState',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ShipToCountry',
            name: 'shipToCountry',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ShipToAddressType',
            name: 'shipToAddressType',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BillToStreet',
            name: 'billToStreet',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BillToStreetNo',
            name: 'billToStreetNo',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BillToBlock',
            name: 'billToBlock',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BillToBuilding',
            name: 'billToBuilding',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BillToCity',
            name: 'billToCity',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BillToZipCode',
            name: 'billToZipCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BillToCounty',
            name: 'billToCounty',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BillToState',
            name: 'billToState',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BillToCountry',
            name: 'billToCountry',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BillToAddressType',
            name: 'billToAddressType',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ShipToGlobalLocationNumber',
            name: 'shipToGlobalLocationNumber',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BillToGlobalLocationNumber',
            name: 'billToGlobalLocationNumber',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ShipToAddress2',
            name: 'shipToAddress2',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ShipToAddress3',
            name: 'shipToAddress3',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BillToAddress2',
            name: 'billToAddress2',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BillToAddress3',
            name: 'billToAddress3',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PlaceOfSupply',
            name: 'placeOfSupply',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, AddressExtension);
    }
    AddressExtension.build = build;
})(AddressExtension = exports.AddressExtension || (exports.AddressExtension = {}));
//# sourceMappingURL=AddressExtension.js.map