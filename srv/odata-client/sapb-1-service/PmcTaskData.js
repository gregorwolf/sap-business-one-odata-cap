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
exports.PmcTaskData = exports.PmcTaskDataField = exports.createPmcTaskData = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[PmcTaskData.build]] instead.
 */
function createPmcTaskData(json) {
    return PmcTaskData.build(json);
}
exports.createPmcTaskData = createPmcTaskData;
/**
 * PmcTaskDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PmcTaskDataField = /** @class */ (function (_super) {
    __extends(PmcTaskDataField, _super);
    function PmcTaskDataField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[PmcTaskData.taskId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taskId = new v4_1.ComplexTypeNumberPropertyField('TaskID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmcTaskData.taskName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taskName = new v4_1.ComplexTypeStringPropertyField('TaskName', _this, 'Edm.String');
        return _this;
    }
    return PmcTaskDataField;
}(v4_1.ComplexTypeField));
exports.PmcTaskDataField = PmcTaskDataField;
var PmcTaskData;
(function (PmcTaskData) {
    function build(json) {
        return v4_1.createComplexType(json, {
            TaskID: function (taskId) { return ({ taskId: v4_1.edmToTs(taskId, 'Edm.Int32') }); },
            TaskName: function (taskName) { return ({ taskName: v4_1.edmToTs(taskName, 'Edm.String') }); }
        });
    }
    PmcTaskData.build = build;
})(PmcTaskData = exports.PmcTaskData || (exports.PmcTaskData = {}));
//# sourceMappingURL=PmcTaskData.js.map