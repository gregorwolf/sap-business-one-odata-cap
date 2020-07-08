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
exports.FeatureStatus = exports.FeatureStatusField = exports.createFeatureStatus = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[FeatureStatus.build]] instead.
 */
function createFeatureStatus(json) {
    return FeatureStatus.build(json);
}
exports.createFeatureStatus = createFeatureStatus;
/**
 * FeatureStatusField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var FeatureStatusField = /** @class */ (function (_super) {
    __extends(FeatureStatusField, _super);
    function FeatureStatusField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[FeatureStatus.featureId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.featureId = new v4_1.ComplexTypeStringPropertyField('FeatureID', _this, 'Edm.String');
        return _this;
    }
    return FeatureStatusField;
}(v4_1.ComplexTypeField));
exports.FeatureStatusField = FeatureStatusField;
var FeatureStatus;
(function (FeatureStatus) {
    function build(json) {
        return v4_1.createComplexType(json, {
            FeatureID: function (featureId) { return ({ featureId: v4_1.edmToTs(featureId, 'Edm.String') }); }
        });
    }
    FeatureStatus.build = build;
})(FeatureStatus = exports.FeatureStatus || (exports.FeatureStatus = {}));
//# sourceMappingURL=FeatureStatus.js.map