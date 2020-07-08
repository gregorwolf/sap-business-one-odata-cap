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
exports.QueryAuthGroupParams = exports.QueryAuthGroupParamsField = exports.createQueryAuthGroupParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function QueryAuthGroupParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[QueryAuthGroupParams.authGroupId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.authGroupId = new v4_1.ComplexTypeNumberPropertyField('AuthGroupId', _this, 'Edm.Int32');
        /**
         * Representation of the [[QueryAuthGroupParams.authGroupCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.authGroupCode = new v4_1.ComplexTypeStringPropertyField('AuthGroupCode', _this, 'Edm.String');
        return _this;
    }
    return QueryAuthGroupParamsField;
}(v4_1.ComplexTypeField));
exports.QueryAuthGroupParamsField = QueryAuthGroupParamsField;
var QueryAuthGroupParams;
(function (QueryAuthGroupParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AuthGroupId: function (authGroupId) { return ({ authGroupId: v4_1.edmToTs(authGroupId, 'Edm.Int32') }); },
            AuthGroupCode: function (authGroupCode) { return ({ authGroupCode: v4_1.edmToTs(authGroupCode, 'Edm.String') }); }
        });
    }
    QueryAuthGroupParams.build = build;
})(QueryAuthGroupParams = exports.QueryAuthGroupParams || (exports.QueryAuthGroupParams = {}));
//# sourceMappingURL=QueryAuthGroupParams.js.map