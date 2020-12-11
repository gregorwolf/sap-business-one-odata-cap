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
exports.QueryAuthGroupParams = exports.QueryAuthGroupParamsField = exports.createQueryAuthGroupParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[QueryAuthGroupParams.build]] instead.
 */
function createQueryAuthGroupParams(json) {
    return QueryAuthGroupParams.build(json);
}
exports.createQueryAuthGroupParams = createQueryAuthGroupParams;
/**
 * QueryAuthGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var QueryAuthGroupParamsField = /** @class */ (function (_super) {
    __extends(QueryAuthGroupParamsField, _super);
    /**
     * Creates an instance of QueryAuthGroupParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function QueryAuthGroupParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, QueryAuthGroupParams) || this;
        /**
         * Representation of the [[QueryAuthGroupParams.authGroupId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.authGroupId = new core_1.ComplexTypeNumberPropertyField('AuthGroupId', _this, 'Edm.Int32');
        /**
         * Representation of the [[QueryAuthGroupParams.authGroupCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.authGroupCode = new core_1.ComplexTypeStringPropertyField('AuthGroupCode', _this, 'Edm.String');
        return _this;
    }
    return QueryAuthGroupParamsField;
}(core_1.ComplexTypeField));
exports.QueryAuthGroupParamsField = QueryAuthGroupParamsField;
var QueryAuthGroupParams;
(function (QueryAuthGroupParams) {
    /**
     * Metadata information on all properties of the `QueryAuthGroupParams` complex type.
     */
    QueryAuthGroupParams._propertyMetadata = [{
            originalName: 'AuthGroupId',
            name: 'authGroupId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'AuthGroupCode',
            name: 'authGroupCode',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, QueryAuthGroupParams);
    }
    QueryAuthGroupParams.build = build;
})(QueryAuthGroupParams = exports.QueryAuthGroupParams || (exports.QueryAuthGroupParams = {}));
//# sourceMappingURL=QueryAuthGroupParams.js.map