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
exports.PartnersSetupParams = exports.PartnersSetupParamsField = exports.createPartnersSetupParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[PartnersSetupParams.build]] instead.
 */
function createPartnersSetupParams(json) {
    return PartnersSetupParams.build(json);
}
exports.createPartnersSetupParams = createPartnersSetupParams;
/**
 * PartnersSetupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PartnersSetupParamsField = /** @class */ (function (_super) {
    __extends(PartnersSetupParamsField, _super);
    function PartnersSetupParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[PartnersSetupParams.partnerId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.partnerId = new v4_1.ComplexTypeNumberPropertyField('PartnerID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PartnersSetupParams.name]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.name = new v4_1.ComplexTypeStringPropertyField('Name', _this, 'Edm.String');
        /**
         * Representation of the [[PartnersSetupParams.defaultRelationship]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.defaultRelationship = new v4_1.ComplexTypeNumberPropertyField('DefaultRelationship', _this, 'Edm.Int32');
        /**
         * Representation of the [[PartnersSetupParams.relatedBp]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.relatedBp = new v4_1.ComplexTypeStringPropertyField('RelatedBP', _this, 'Edm.String');
        /**
         * Representation of the [[PartnersSetupParams.details]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.details = new v4_1.ComplexTypeStringPropertyField('Details', _this, 'Edm.String');
        return _this;
    }
    return PartnersSetupParamsField;
}(v4_1.ComplexTypeField));
exports.PartnersSetupParamsField = PartnersSetupParamsField;
var PartnersSetupParams;
(function (PartnersSetupParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            PartnerID: function (partnerId) { return ({ partnerId: v4_1.edmToTs(partnerId, 'Edm.Int32') }); },
            Name: function (name) { return ({ name: v4_1.edmToTs(name, 'Edm.String') }); },
            DefaultRelationship: function (defaultRelationship) { return ({ defaultRelationship: v4_1.edmToTs(defaultRelationship, 'Edm.Int32') }); },
            RelatedBP: function (relatedBp) { return ({ relatedBp: v4_1.edmToTs(relatedBp, 'Edm.String') }); },
            Details: function (details) { return ({ details: v4_1.edmToTs(details, 'Edm.String') }); }
        });
    }
    PartnersSetupParams.build = build;
})(PartnersSetupParams = exports.PartnersSetupParams || (exports.PartnersSetupParams = {}));
//# sourceMappingURL=PartnersSetupParams.js.map