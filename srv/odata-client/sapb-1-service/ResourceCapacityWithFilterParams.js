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
exports.ResourceCapacityWithFilterParams = exports.ResourceCapacityWithFilterParamsField = exports.createResourceCapacityWithFilterParams = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ResourceCapacityWithFilterParams.build]] instead.
 */
function createResourceCapacityWithFilterParams(json) {
    return ResourceCapacityWithFilterParams.build(json);
}
exports.createResourceCapacityWithFilterParams = createResourceCapacityWithFilterParams;
/**
 * ResourceCapacityWithFilterParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ResourceCapacityWithFilterParamsField = /** @class */ (function (_super) {
    __extends(ResourceCapacityWithFilterParamsField, _super);
    function ResourceCapacityWithFilterParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ResourceCapacityWithFilterParams.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new v4_1.ComplexTypeStringPropertyField('Code', _this, 'Edm.String');
        /**
         * Representation of the [[ResourceCapacityWithFilterParams.warehouse]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehouse = new v4_1.ComplexTypeStringPropertyField('Warehouse', _this, 'Edm.String');
        /**
         * Representation of the [[ResourceCapacityWithFilterParams.date]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.date = new v4_1.ComplexTypeDatePropertyField('Date', _this, 'Edm.DateTimeOffset');
        return _this;
    }
    return ResourceCapacityWithFilterParamsField;
}(v4_1.ComplexTypeField));
exports.ResourceCapacityWithFilterParamsField = ResourceCapacityWithFilterParamsField;
var ResourceCapacityWithFilterParams;
(function (ResourceCapacityWithFilterParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Code: function (code) { return ({ code: v4_1.edmToTs(code, 'Edm.String') }); },
            Warehouse: function (warehouse) { return ({ warehouse: v4_1.edmToTs(warehouse, 'Edm.String') }); },
            Date: function (date) { return ({ date: v4_1.edmToTs(date, 'Edm.DateTimeOffset') }); }
        });
    }
    ResourceCapacityWithFilterParams.build = build;
})(ResourceCapacityWithFilterParams = exports.ResourceCapacityWithFilterParams || (exports.ResourceCapacityWithFilterParams = {}));
//# sourceMappingURL=ResourceCapacityWithFilterParams.js.map