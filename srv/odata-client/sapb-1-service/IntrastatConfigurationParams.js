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
exports.IntrastatConfigurationParams = exports.IntrastatConfigurationParamsField = exports.createIntrastatConfigurationParams = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[IntrastatConfigurationParams.build]] instead.
 */
function createIntrastatConfigurationParams(json) {
    return IntrastatConfigurationParams.build(json);
}
exports.createIntrastatConfigurationParams = createIntrastatConfigurationParams;
/**
 * IntrastatConfigurationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var IntrastatConfigurationParamsField = /** @class */ (function (_super) {
    __extends(IntrastatConfigurationParamsField, _super);
    function IntrastatConfigurationParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[IntrastatConfigurationParams.absEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absEntry = new v4_1.ComplexTypeNumberPropertyField('AbsEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[IntrastatConfigurationParams.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new v4_1.ComplexTypeStringPropertyField('Code', _this, 'Edm.String');
        /**
         * Representation of the [[IntrastatConfigurationParams.statCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.statCode = new v4_1.ComplexTypeStringPropertyField('StatCode', _this, 'Edm.String');
        /**
         * Representation of the [[IntrastatConfigurationParams.dateFrom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dateFrom = new v4_1.ComplexTypeDatePropertyField('DateFrom', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[IntrastatConfigurationParams.dateTo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dateTo = new v4_1.ComplexTypeDatePropertyField('DateTo', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[IntrastatConfigurationParams.country]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.country = new v4_1.ComplexTypeStringPropertyField('Country', _this, 'Edm.String');
        return _this;
    }
    return IntrastatConfigurationParamsField;
}(v4_1.ComplexTypeField));
exports.IntrastatConfigurationParamsField = IntrastatConfigurationParamsField;
var IntrastatConfigurationParams;
(function (IntrastatConfigurationParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AbsEntry: function (absEntry) { return ({ absEntry: v4_1.edmToTs(absEntry, 'Edm.Int32') }); },
            Code: function (code) { return ({ code: v4_1.edmToTs(code, 'Edm.String') }); },
            StatCode: function (statCode) { return ({ statCode: v4_1.edmToTs(statCode, 'Edm.String') }); },
            DateFrom: function (dateFrom) { return ({ dateFrom: v4_1.edmToTs(dateFrom, 'Edm.DateTimeOffset') }); },
            DateTo: function (dateTo) { return ({ dateTo: v4_1.edmToTs(dateTo, 'Edm.DateTimeOffset') }); },
            Country: function (country) { return ({ country: v4_1.edmToTs(country, 'Edm.String') }); }
        });
    }
    IntrastatConfigurationParams.build = build;
})(IntrastatConfigurationParams = exports.IntrastatConfigurationParams || (exports.IntrastatConfigurationParams = {}));
//# sourceMappingURL=IntrastatConfigurationParams.js.map