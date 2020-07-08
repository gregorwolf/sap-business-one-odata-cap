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
exports.EcmActionStatusData = exports.EcmActionStatusDataField = exports.createEcmActionStatusData = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[EcmActionStatusData.build]] instead.
 */
function createEcmActionStatusData(json) {
    return EcmActionStatusData.build(json);
}
exports.createEcmActionStatusData = createEcmActionStatusData;
/**
 * EcmActionStatusDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var EcmActionStatusDataField = /** @class */ (function (_super) {
    __extends(EcmActionStatusDataField, _super);
    function EcmActionStatusDataField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[EcmActionStatusData.absEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absEntry = new v4_1.ComplexTypeNumberPropertyField('AbsEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[EcmActionStatusData.reportId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reportId = new v4_1.ComplexTypeStringPropertyField('ReportID', _this, 'Edm.String');
        /**
         * Representation of the [[EcmActionStatusData.receivDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.receivDate = new v4_1.ComplexTypeDatePropertyField('ReceivDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[EcmActionStatusData.actMessage]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actMessage = new v4_1.ComplexTypeStringPropertyField('ActMessage', _this, 'Edm.String');
        return _this;
    }
    return EcmActionStatusDataField;
}(v4_1.ComplexTypeField));
exports.EcmActionStatusDataField = EcmActionStatusDataField;
var EcmActionStatusData;
(function (EcmActionStatusData) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AbsEntry: function (absEntry) { return ({ absEntry: v4_1.edmToTs(absEntry, 'Edm.Int32') }); },
            ReportID: function (reportId) { return ({ reportId: v4_1.edmToTs(reportId, 'Edm.String') }); },
            ReceivDate: function (receivDate) { return ({ receivDate: v4_1.edmToTs(receivDate, 'Edm.DateTimeOffset') }); },
            ActMessage: function (actMessage) { return ({ actMessage: v4_1.edmToTs(actMessage, 'Edm.String') }); }
        });
    }
    EcmActionStatusData.build = build;
})(EcmActionStatusData = exports.EcmActionStatusData || (exports.EcmActionStatusData = {}));
//# sourceMappingURL=EcmActionStatusData.js.map