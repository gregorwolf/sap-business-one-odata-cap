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
exports.PmcAreaData = exports.PmcAreaDataField = exports.createPmcAreaData = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[PmcAreaData.build]] instead.
 */
function createPmcAreaData(json) {
    return PmcAreaData.build(json);
}
exports.createPmcAreaData = createPmcAreaData;
/**
 * PmcAreaDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PmcAreaDataField = /** @class */ (function (_super) {
    __extends(PmcAreaDataField, _super);
    function PmcAreaDataField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[PmcAreaData.areaId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.areaId = new v4_1.ComplexTypeNumberPropertyField('AreaID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmcAreaData.areaName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.areaName = new v4_1.ComplexTypeStringPropertyField('AreaName', _this, 'Edm.String');
        return _this;
    }
    return PmcAreaDataField;
}(v4_1.ComplexTypeField));
exports.PmcAreaDataField = PmcAreaDataField;
var PmcAreaData;
(function (PmcAreaData) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AreaID: function (areaId) { return ({ areaId: v4_1.edmToTs(areaId, 'Edm.Int32') }); },
            AreaName: function (areaName) { return ({ areaName: v4_1.edmToTs(areaName, 'Edm.String') }); }
        });
    }
    PmcAreaData.build = build;
})(PmcAreaData = exports.PmcAreaData || (exports.PmcAreaData = {}));
//# sourceMappingURL=PmcAreaData.js.map