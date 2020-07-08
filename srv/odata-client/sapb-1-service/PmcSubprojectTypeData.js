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
exports.PmcSubprojectTypeData = exports.PmcSubprojectTypeDataField = exports.createPmcSubprojectTypeData = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[PmcSubprojectTypeData.build]] instead.
 */
function createPmcSubprojectTypeData(json) {
    return PmcSubprojectTypeData.build(json);
}
exports.createPmcSubprojectTypeData = createPmcSubprojectTypeData;
/**
 * PmcSubprojectTypeDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PmcSubprojectTypeDataField = /** @class */ (function (_super) {
    __extends(PmcSubprojectTypeDataField, _super);
    function PmcSubprojectTypeDataField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[PmcSubprojectTypeData.subprojectTypeId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.subprojectTypeId = new v4_1.ComplexTypeNumberPropertyField('SubprojectTypeID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmcSubprojectTypeData.subprojectTypeName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.subprojectTypeName = new v4_1.ComplexTypeStringPropertyField('SubprojectTypeName', _this, 'Edm.String');
        return _this;
    }
    return PmcSubprojectTypeDataField;
}(v4_1.ComplexTypeField));
exports.PmcSubprojectTypeDataField = PmcSubprojectTypeDataField;
var PmcSubprojectTypeData;
(function (PmcSubprojectTypeData) {
    function build(json) {
        return v4_1.createComplexType(json, {
            SubprojectTypeID: function (subprojectTypeId) { return ({ subprojectTypeId: v4_1.edmToTs(subprojectTypeId, 'Edm.Int32') }); },
            SubprojectTypeName: function (subprojectTypeName) { return ({ subprojectTypeName: v4_1.edmToTs(subprojectTypeName, 'Edm.String') }); }
        });
    }
    PmcSubprojectTypeData.build = build;
})(PmcSubprojectTypeData = exports.PmcSubprojectTypeData || (exports.PmcSubprojectTypeData = {}));
//# sourceMappingURL=PmcSubprojectTypeData.js.map