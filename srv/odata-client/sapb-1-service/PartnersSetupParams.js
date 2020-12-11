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
exports.PartnersSetupParams = exports.PartnersSetupParamsField = exports.createPartnersSetupParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of PartnersSetupParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function PartnersSetupParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, PartnersSetupParams) || this;
        /**
         * Representation of the [[PartnersSetupParams.partnerId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.partnerId = new core_1.ComplexTypeNumberPropertyField('PartnerID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PartnersSetupParams.name]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.name = new core_1.ComplexTypeStringPropertyField('Name', _this, 'Edm.String');
        /**
         * Representation of the [[PartnersSetupParams.defaultRelationship]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.defaultRelationship = new core_1.ComplexTypeNumberPropertyField('DefaultRelationship', _this, 'Edm.Int32');
        /**
         * Representation of the [[PartnersSetupParams.relatedBp]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.relatedBp = new core_1.ComplexTypeStringPropertyField('RelatedBP', _this, 'Edm.String');
        /**
         * Representation of the [[PartnersSetupParams.details]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.details = new core_1.ComplexTypeStringPropertyField('Details', _this, 'Edm.String');
        return _this;
    }
    return PartnersSetupParamsField;
}(core_1.ComplexTypeField));
exports.PartnersSetupParamsField = PartnersSetupParamsField;
var PartnersSetupParams;
(function (PartnersSetupParams) {
    /**
     * Metadata information on all properties of the `PartnersSetupParams` complex type.
     */
    PartnersSetupParams._propertyMetadata = [{
            originalName: 'PartnerID',
            name: 'partnerId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Name',
            name: 'name',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DefaultRelationship',
            name: 'defaultRelationship',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'RelatedBP',
            name: 'relatedBp',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Details',
            name: 'details',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, PartnersSetupParams);
    }
    PartnersSetupParams.build = build;
})(PartnersSetupParams = exports.PartnersSetupParams || (exports.PartnersSetupParams = {}));
//# sourceMappingURL=PartnersSetupParams.js.map