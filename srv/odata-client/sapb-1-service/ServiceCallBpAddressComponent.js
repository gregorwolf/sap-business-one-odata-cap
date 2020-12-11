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
exports.ServiceCallBpAddressComponent = exports.ServiceCallBpAddressComponentField = exports.createServiceCallBpAddressComponent = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of ServiceCallBpAddressComponentField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ServiceCallBpAddressComponentField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ServiceCallBpAddressComponent) || this;
        /**
         * Representation of the [[ServiceCallBpAddressComponent.shipToStreet]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToStreet = new core_1.ComplexTypeStringPropertyField('ShipToStreet', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.shipToStreetNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToStreetNo = new core_1.ComplexTypeStringPropertyField('ShipToStreetNo', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.shipToBlock]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToBlock = new core_1.ComplexTypeStringPropertyField('ShipToBlock', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.shipToBuilding]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToBuilding = new core_1.ComplexTypeStringPropertyField('ShipToBuilding', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.shipToCity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToCity = new core_1.ComplexTypeStringPropertyField('ShipToCity', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.shipToZipCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToZipCode = new core_1.ComplexTypeStringPropertyField('ShipToZipCode', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.shipToState]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToState = new core_1.ComplexTypeStringPropertyField('ShipToState', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.shipToCounty]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToCounty = new core_1.ComplexTypeStringPropertyField('ShipToCounty', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.shipToCountry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToCountry = new core_1.ComplexTypeStringPropertyField('ShipToCountry', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.shipToAddressType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToAddressType = new core_1.ComplexTypeStringPropertyField('ShipToAddressType', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.shipToAddress2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToAddress2 = new core_1.ComplexTypeStringPropertyField('ShipToAddress2', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.shipToAddress3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToAddress3 = new core_1.ComplexTypeStringPropertyField('ShipToAddress3', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.shipToGlobalLocationNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToGlobalLocationNumber = new core_1.ComplexTypeStringPropertyField('ShipToGlobalLocationNumber', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.billToStreet]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billToStreet = new core_1.ComplexTypeStringPropertyField('BillToStreet', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.billToStreetNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billToStreetNo = new core_1.ComplexTypeStringPropertyField('BillToStreetNo', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.billToBlock]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billToBlock = new core_1.ComplexTypeStringPropertyField('BillToBlock', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.billToBuilding]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billToBuilding = new core_1.ComplexTypeStringPropertyField('BillToBuilding', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.billToCity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billToCity = new core_1.ComplexTypeStringPropertyField('BillToCity', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.billToZipCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billToZipCode = new core_1.ComplexTypeStringPropertyField('BillToZipCode', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.billToState]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billToState = new core_1.ComplexTypeStringPropertyField('BillToState', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.billToCounty]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billToCounty = new core_1.ComplexTypeStringPropertyField('BillToCounty', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.billToCountry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billToCountry = new core_1.ComplexTypeStringPropertyField('BillToCountry', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.billToAddressType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billToAddressType = new core_1.ComplexTypeStringPropertyField('BillToAddressType', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.billToAddress2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billToAddress2 = new core_1.ComplexTypeStringPropertyField('BillToAddress2', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.billToAddress3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billToAddress3 = new core_1.ComplexTypeStringPropertyField('BillToAddress3', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallBpAddressComponent.billToGlobalLocationNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billToGlobalLocationNumber = new core_1.ComplexTypeStringPropertyField('BillToGlobalLocationNumber', _this, 'Edm.String');
        return _this;
    }
    return ServiceCallBpAddressComponentField;
}(core_1.ComplexTypeField));
exports.ServiceCallBpAddressComponentField = ServiceCallBpAddressComponentField;
var ServiceCallBpAddressComponent;
(function (ServiceCallBpAddressComponent) {
    /**
     * Metadata information on all properties of the `ServiceCallBpAddressComponent` complex type.
     */
    ServiceCallBpAddressComponent._propertyMetadata = [{
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
            originalName: 'ShipToState',
            name: 'shipToState',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ShipToCounty',
            name: 'shipToCounty',
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
            originalName: 'ShipToGlobalLocationNumber',
            name: 'shipToGlobalLocationNumber',
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
            originalName: 'BillToState',
            name: 'billToState',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BillToCounty',
            name: 'billToCounty',
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
            originalName: 'BillToGlobalLocationNumber',
            name: 'billToGlobalLocationNumber',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ServiceCallBpAddressComponent);
    }
    ServiceCallBpAddressComponent.build = build;
})(ServiceCallBpAddressComponent = exports.ServiceCallBpAddressComponent || (exports.ServiceCallBpAddressComponent = {}));
//# sourceMappingURL=ServiceCallBpAddressComponent.js.map