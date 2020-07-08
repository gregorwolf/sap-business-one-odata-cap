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
exports.TargetGroupsDetail = exports.TargetGroupsDetailField = exports.createTargetGroupsDetail = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[TargetGroupsDetail.build]] instead.
 */
function createTargetGroupsDetail(json) {
    return TargetGroupsDetail.build(json);
}
exports.createTargetGroupsDetail = createTargetGroupsDetail;
/**
 * TargetGroupsDetailField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var TargetGroupsDetailField = /** @class */ (function (_super) {
    __extends(TargetGroupsDetailField, _super);
    function TargetGroupsDetailField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[TargetGroupsDetail.targetGroupCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.targetGroupCode = new v4_1.ComplexTypeStringPropertyField('TargetGroupCode', _this, 'Edm.String');
        /**
         * Representation of the [[TargetGroupsDetail.businessPartnerCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.businessPartnerCode = new v4_1.ComplexTypeStringPropertyField('BusinessPartnerCode', _this, 'Edm.String');
        /**
         * Representation of the [[TargetGroupsDetail.businessPartnerName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.businessPartnerName = new v4_1.ComplexTypeStringPropertyField('BusinessPartnerName', _this, 'Edm.String');
        /**
         * Representation of the [[TargetGroupsDetail.groupCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.groupCode = new v4_1.ComplexTypeStringPropertyField('GroupCode', _this, 'Edm.String');
        /**
         * Representation of the [[TargetGroupsDetail.industry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.industry = new v4_1.ComplexTypeStringPropertyField('Industry', _this, 'Edm.String');
        /**
         * Representation of the [[TargetGroupsDetail.contactPerson]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.contactPerson = new v4_1.ComplexTypeStringPropertyField('ContactPerson', _this, 'Edm.String');
        /**
         * Representation of the [[TargetGroupsDetail.title]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.title = new v4_1.ComplexTypeStringPropertyField('Title', _this, 'Edm.String');
        /**
         * Representation of the [[TargetGroupsDetail.position]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.position = new v4_1.ComplexTypeStringPropertyField('Position', _this, 'Edm.String');
        /**
         * Representation of the [[TargetGroupsDetail.eMail]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.eMail = new v4_1.ComplexTypeStringPropertyField('E_Mail', _this, 'Edm.String');
        /**
         * Representation of the [[TargetGroupsDetail.telephone]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.telephone = new v4_1.ComplexTypeStringPropertyField('Telephone', _this, 'Edm.String');
        /**
         * Representation of the [[TargetGroupsDetail.mobilePhone]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.mobilePhone = new v4_1.ComplexTypeStringPropertyField('MobilePhone', _this, 'Edm.String');
        /**
         * Representation of the [[TargetGroupsDetail.fax]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fax = new v4_1.ComplexTypeStringPropertyField('Fax', _this, 'Edm.String');
        /**
         * Representation of the [[TargetGroupsDetail.address]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.address = new v4_1.ComplexTypeStringPropertyField('Address', _this, 'Edm.String');
        /**
         * Representation of the [[TargetGroupsDetail.street]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.street = new v4_1.ComplexTypeStringPropertyField('Street', _this, 'Edm.String');
        /**
         * Representation of the [[TargetGroupsDetail.block]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.block = new v4_1.ComplexTypeStringPropertyField('Block', _this, 'Edm.String');
        /**
         * Representation of the [[TargetGroupsDetail.city]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.city = new v4_1.ComplexTypeStringPropertyField('City', _this, 'Edm.String');
        /**
         * Representation of the [[TargetGroupsDetail.zipCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.zipCode = new v4_1.ComplexTypeStringPropertyField('ZipCode', _this, 'Edm.String');
        /**
         * Representation of the [[TargetGroupsDetail.county]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.county = new v4_1.ComplexTypeStringPropertyField('County', _this, 'Edm.String');
        /**
         * Representation of the [[TargetGroupsDetail.state]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.state = new v4_1.ComplexTypeStringPropertyField('State', _this, 'Edm.String');
        /**
         * Representation of the [[TargetGroupsDetail.country]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.country = new v4_1.ComplexTypeStringPropertyField('Country', _this, 'Edm.String');
        /**
         * Representation of the [[TargetGroupsDetail.building]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.building = new v4_1.ComplexTypeStringPropertyField('Building', _this, 'Edm.String');
        return _this;
    }
    return TargetGroupsDetailField;
}(v4_1.ComplexTypeField));
exports.TargetGroupsDetailField = TargetGroupsDetailField;
var TargetGroupsDetail;
(function (TargetGroupsDetail) {
    function build(json) {
        return v4_1.createComplexType(json, {
            TargetGroupCode: function (targetGroupCode) { return ({ targetGroupCode: v4_1.edmToTs(targetGroupCode, 'Edm.String') }); },
            BusinessPartnerCode: function (businessPartnerCode) { return ({ businessPartnerCode: v4_1.edmToTs(businessPartnerCode, 'Edm.String') }); },
            BusinessPartnerName: function (businessPartnerName) { return ({ businessPartnerName: v4_1.edmToTs(businessPartnerName, 'Edm.String') }); },
            GroupCode: function (groupCode) { return ({ groupCode: v4_1.edmToTs(groupCode, 'Edm.String') }); },
            Industry: function (industry) { return ({ industry: v4_1.edmToTs(industry, 'Edm.String') }); },
            ContactPerson: function (contactPerson) { return ({ contactPerson: v4_1.edmToTs(contactPerson, 'Edm.String') }); },
            Title: function (title) { return ({ title: v4_1.edmToTs(title, 'Edm.String') }); },
            Position: function (position) { return ({ position: v4_1.edmToTs(position, 'Edm.String') }); },
            E_Mail: function (eMail) { return ({ eMail: v4_1.edmToTs(eMail, 'Edm.String') }); },
            Telephone: function (telephone) { return ({ telephone: v4_1.edmToTs(telephone, 'Edm.String') }); },
            MobilePhone: function (mobilePhone) { return ({ mobilePhone: v4_1.edmToTs(mobilePhone, 'Edm.String') }); },
            Fax: function (fax) { return ({ fax: v4_1.edmToTs(fax, 'Edm.String') }); },
            Address: function (address) { return ({ address: v4_1.edmToTs(address, 'Edm.String') }); },
            Street: function (street) { return ({ street: v4_1.edmToTs(street, 'Edm.String') }); },
            Block: function (block) { return ({ block: v4_1.edmToTs(block, 'Edm.String') }); },
            City: function (city) { return ({ city: v4_1.edmToTs(city, 'Edm.String') }); },
            ZipCode: function (zipCode) { return ({ zipCode: v4_1.edmToTs(zipCode, 'Edm.String') }); },
            County: function (county) { return ({ county: v4_1.edmToTs(county, 'Edm.String') }); },
            State: function (state) { return ({ state: v4_1.edmToTs(state, 'Edm.String') }); },
            Country: function (country) { return ({ country: v4_1.edmToTs(country, 'Edm.String') }); },
            Building: function (building) { return ({ building: v4_1.edmToTs(building, 'Edm.String') }); }
        });
    }
    TargetGroupsDetail.build = build;
})(TargetGroupsDetail = exports.TargetGroupsDetail || (exports.TargetGroupsDetail = {}));
//# sourceMappingURL=TargetGroupsDetail.js.map