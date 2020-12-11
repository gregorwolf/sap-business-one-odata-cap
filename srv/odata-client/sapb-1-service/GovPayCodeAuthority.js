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
exports.GovPayCodeAuthority = exports.GovPayCodeAuthorityField = exports.createGovPayCodeAuthority = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[GovPayCodeAuthority.build]] instead.
 */
function createGovPayCodeAuthority(json) {
    return GovPayCodeAuthority.build(json);
}
exports.createGovPayCodeAuthority = createGovPayCodeAuthority;
/**
 * GovPayCodeAuthorityField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var GovPayCodeAuthorityField = /** @class */ (function (_super) {
    __extends(GovPayCodeAuthorityField, _super);
    /**
     * Creates an instance of GovPayCodeAuthorityField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function GovPayCodeAuthorityField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, GovPayCodeAuthority) || this;
        /**
         * Representation of the [[GovPayCodeAuthority.absId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absId = new core_1.ComplexTypeNumberPropertyField('AbsId', _this, 'Edm.Int32');
        /**
         * Representation of the [[GovPayCodeAuthority.bplId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bplId = new core_1.ComplexTypeNumberPropertyField('BPLId', _this, 'Edm.Int32');
        /**
         * Representation of the [[GovPayCodeAuthority.state]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.state = new core_1.ComplexTypeStringPropertyField('State', _this, 'Edm.String');
        /**
         * Representation of the [[GovPayCodeAuthority.cardCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cardCode = new core_1.ComplexTypeStringPropertyField('CardCode', _this, 'Edm.String');
        return _this;
    }
    return GovPayCodeAuthorityField;
}(core_1.ComplexTypeField));
exports.GovPayCodeAuthorityField = GovPayCodeAuthorityField;
var GovPayCodeAuthority;
(function (GovPayCodeAuthority) {
    /**
     * Metadata information on all properties of the `GovPayCodeAuthority` complex type.
     */
    GovPayCodeAuthority._propertyMetadata = [{
            originalName: 'AbsId',
            name: 'absId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BPLId',
            name: 'bplId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'State',
            name: 'state',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CardCode',
            name: 'cardCode',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, GovPayCodeAuthority);
    }
    GovPayCodeAuthority.build = build;
})(GovPayCodeAuthority = exports.GovPayCodeAuthority || (exports.GovPayCodeAuthority = {}));
//# sourceMappingURL=GovPayCodeAuthority.js.map