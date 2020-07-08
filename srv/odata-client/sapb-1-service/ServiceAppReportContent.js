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
exports.ServiceAppReportContent = exports.ServiceAppReportContentField = exports.createServiceAppReportContent = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ServiceAppReportContent.build]] instead.
 */
function createServiceAppReportContent(json) {
    return ServiceAppReportContent.build(json);
}
exports.createServiceAppReportContent = createServiceAppReportContent;
/**
 * ServiceAppReportContentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ServiceAppReportContentField = /** @class */ (function (_super) {
    __extends(ServiceAppReportContentField, _super);
    function ServiceAppReportContentField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ServiceAppReportContent.reportContent]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reportContent = new v4_1.ComplexTypeStringPropertyField('ReportContent', _this, 'Edm.String');
        return _this;
    }
    return ServiceAppReportContentField;
}(v4_1.ComplexTypeField));
exports.ServiceAppReportContentField = ServiceAppReportContentField;
var ServiceAppReportContent;
(function (ServiceAppReportContent) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ReportContent: function (reportContent) { return ({ reportContent: v4_1.edmToTs(reportContent, 'Edm.String') }); }
        });
    }
    ServiceAppReportContent.build = build;
})(ServiceAppReportContent = exports.ServiceAppReportContent || (exports.ServiceAppReportContent = {}));
//# sourceMappingURL=ServiceAppReportContent.js.map