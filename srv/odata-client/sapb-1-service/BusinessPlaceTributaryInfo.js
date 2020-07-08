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
exports.BusinessPlaceTributaryInfo = exports.BusinessPlaceTributaryInfoField = exports.createBusinessPlaceTributaryInfo = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[BusinessPlaceTributaryInfo.build]] instead.
 */
function createBusinessPlaceTributaryInfo(json) {
    return BusinessPlaceTributaryInfo.build(json);
}
exports.createBusinessPlaceTributaryInfo = createBusinessPlaceTributaryInfo;
/**
 * BusinessPlaceTributaryInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BusinessPlaceTributaryInfoField = /** @class */ (function (_super) {
    __extends(BusinessPlaceTributaryInfoField, _super);
    function BusinessPlaceTributaryInfoField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[BusinessPlaceTributaryInfo.bplid]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bplid = new v4_1.ComplexTypeNumberPropertyField('BPLID', _this, 'Edm.Int32');
        /**
         * Representation of the [[BusinessPlaceTributaryInfo.tributaryId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.tributaryId = new v4_1.ComplexTypeNumberPropertyField('TributaryID', _this, 'Edm.Int32');
        /**
         * Representation of the [[BusinessPlaceTributaryInfo.tributaryType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.tributaryType = new v4_1.ComplexTypeNumberPropertyField('TributaryType', _this, 'Edm.Int32');
        /**
         * Representation of the [[BusinessPlaceTributaryInfo.ttStartDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ttStartDate = new v4_1.ComplexTypeDatePropertyField('TTStartDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[BusinessPlaceTributaryInfo.ttEndDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ttEndDate = new v4_1.ComplexTypeDatePropertyField('TTEndDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[BusinessPlaceTributaryInfo.tributaryRegimeCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.tributaryRegimeCode = new v4_1.ComplexTypeNumberPropertyField('TributaryRegimeCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[BusinessPlaceTributaryInfo.trcStartDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.trcStartDate = new v4_1.ComplexTypeDatePropertyField('TRCStartDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[BusinessPlaceTributaryInfo.trcEndDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.trcEndDate = new v4_1.ComplexTypeDatePropertyField('TRCEndDate', _this, 'Edm.DateTimeOffset');
        return _this;
    }
    return BusinessPlaceTributaryInfoField;
}(v4_1.ComplexTypeField));
exports.BusinessPlaceTributaryInfoField = BusinessPlaceTributaryInfoField;
var BusinessPlaceTributaryInfo;
(function (BusinessPlaceTributaryInfo) {
    function build(json) {
        return v4_1.createComplexType(json, {
            BPLID: function (bplid) { return ({ bplid: v4_1.edmToTs(bplid, 'Edm.Int32') }); },
            TributaryID: function (tributaryId) { return ({ tributaryId: v4_1.edmToTs(tributaryId, 'Edm.Int32') }); },
            TributaryType: function (tributaryType) { return ({ tributaryType: v4_1.edmToTs(tributaryType, 'Edm.Int32') }); },
            TTStartDate: function (ttStartDate) { return ({ ttStartDate: v4_1.edmToTs(ttStartDate, 'Edm.DateTimeOffset') }); },
            TTEndDate: function (ttEndDate) { return ({ ttEndDate: v4_1.edmToTs(ttEndDate, 'Edm.DateTimeOffset') }); },
            TributaryRegimeCode: function (tributaryRegimeCode) { return ({ tributaryRegimeCode: v4_1.edmToTs(tributaryRegimeCode, 'Edm.Int32') }); },
            TRCStartDate: function (trcStartDate) { return ({ trcStartDate: v4_1.edmToTs(trcStartDate, 'Edm.DateTimeOffset') }); },
            TRCEndDate: function (trcEndDate) { return ({ trcEndDate: v4_1.edmToTs(trcEndDate, 'Edm.DateTimeOffset') }); }
        });
    }
    BusinessPlaceTributaryInfo.build = build;
})(BusinessPlaceTributaryInfo = exports.BusinessPlaceTributaryInfo || (exports.BusinessPlaceTributaryInfo = {}));
//# sourceMappingURL=BusinessPlaceTributaryInfo.js.map