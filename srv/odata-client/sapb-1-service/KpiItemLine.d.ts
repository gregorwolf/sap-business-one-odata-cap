import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * KpiItemLine
 */
export interface KpiItemLine {
    /**
     * Kpi Code.
     * @nullable
     */
    kpiCode?: string;
    /**
     * Kpi Line Number.
     * @nullable
     */
    kpiLineNumber?: number;
    /**
     * Kpi Name.
     * @nullable
     */
    kpiName?: string;
    /**
     * Kpi Value 1.
     * @nullable
     */
    kpiValue1?: number;
    /**
     * Kpi Value 2.
     * @nullable
     */
    kpiValue2?: number;
    /**
     * Kpi Value 3.
     * @nullable
     */
    kpiValue3?: number;
    /**
     * Kpi Value 4.
     * @nullable
     */
    kpiValue4?: number;
    /**
     * Kpi Value 5.
     * @nullable
     */
    kpiValue5?: number;
    /**
     * Kpi Value 6.
     * @nullable
     */
    kpiValue6?: number;
    /**
     * Kpi Value 7.
     * @nullable
     */
    kpiValue7?: number;
    /**
     * Kpi Value 8.
     * @nullable
     */
    kpiValue8?: number;
    /**
     * Kpi Value 9.
     * @nullable
     */
    kpiValue9?: number;
    /**
     * Kpi Value 10.
     * @nullable
     */
    kpiValue10?: number;
    /**
     * Kpi Value 11.
     * @nullable
     */
    kpiValue11?: number;
    /**
     * Kpi Value 12.
     * @nullable
     */
    kpiValue12?: number;
    /**
     * Kpi Value 13.
     * @nullable
     */
    kpiValue13?: number;
    /**
     * Kpi Value 14.
     * @nullable
     */
    kpiValue14?: number;
    /**
     * Kpi Value 15.
     * @nullable
     */
    kpiValue15?: number;
    /**
     * Kpi Value 16.
     * @nullable
     */
    kpiValue16?: number;
    /**
     * Kpi Value 17.
     * @nullable
     */
    kpiValue17?: number;
    /**
     * Kpi Value 18.
     * @nullable
     */
    kpiValue18?: number;
    /**
     * Kpi Value 19.
     * @nullable
     */
    kpiValue19?: number;
    /**
     * Kpi Value 20.
     * @nullable
     */
    kpiValue20?: number;
    /**
     * Kpi Value 21.
     * @nullable
     */
    kpiValue21?: number;
    /**
     * Kpi Value 22.
     * @nullable
     */
    kpiValue22?: number;
    /**
     * Kpi Value 23.
     * @nullable
     */
    kpiValue23?: number;
    /**
     * Kpi Value 24.
     * @nullable
     */
    kpiValue24?: number;
    /**
     * Kpi Value 25.
     * @nullable
     */
    kpiValue25?: number;
    /**
     * Kpi Value 26.
     * @nullable
     */
    kpiValue26?: number;
    /**
     * Kpi Value 27.
     * @nullable
     */
    kpiValue27?: number;
    /**
     * Kpi Value 28.
     * @nullable
     */
    kpiValue28?: number;
    /**
     * Kpi Value 29.
     * @nullable
     */
    kpiValue29?: number;
    /**
     * Kpi Value 30.
     * @nullable
     */
    kpiValue30?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[KpiItemLine.build]] instead.
 */
export declare function createKpiItemLine(json: any): KpiItemLine;
/**
 * KpiItemLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class KpiItemLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, KpiItemLine> {
    /**
     * Representation of the [[KpiItemLine.kpiCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    kpiCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[KpiItemLine.kpiLineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    kpiLineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[KpiItemLine.kpiName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    kpiName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[KpiItemLine.kpiValue1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    kpiValue1: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[KpiItemLine.kpiValue2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    kpiValue2: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[KpiItemLine.kpiValue3]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    kpiValue3: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[KpiItemLine.kpiValue4]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    kpiValue4: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[KpiItemLine.kpiValue5]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    kpiValue5: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[KpiItemLine.kpiValue6]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    kpiValue6: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[KpiItemLine.kpiValue7]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    kpiValue7: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[KpiItemLine.kpiValue8]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    kpiValue8: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[KpiItemLine.kpiValue9]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    kpiValue9: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[KpiItemLine.kpiValue10]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    kpiValue10: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[KpiItemLine.kpiValue11]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    kpiValue11: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[KpiItemLine.kpiValue12]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    kpiValue12: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[KpiItemLine.kpiValue13]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    kpiValue13: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[KpiItemLine.kpiValue14]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    kpiValue14: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[KpiItemLine.kpiValue15]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    kpiValue15: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[KpiItemLine.kpiValue16]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    kpiValue16: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[KpiItemLine.kpiValue17]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    kpiValue17: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[KpiItemLine.kpiValue18]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    kpiValue18: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[KpiItemLine.kpiValue19]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    kpiValue19: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[KpiItemLine.kpiValue20]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    kpiValue20: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[KpiItemLine.kpiValue21]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    kpiValue21: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[KpiItemLine.kpiValue22]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    kpiValue22: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[KpiItemLine.kpiValue23]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    kpiValue23: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[KpiItemLine.kpiValue24]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    kpiValue24: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[KpiItemLine.kpiValue25]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    kpiValue25: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[KpiItemLine.kpiValue26]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    kpiValue26: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[KpiItemLine.kpiValue27]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    kpiValue27: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[KpiItemLine.kpiValue28]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    kpiValue28: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[KpiItemLine.kpiValue29]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    kpiValue29: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[KpiItemLine.kpiValue30]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    kpiValue30: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of KpiItemLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace KpiItemLine {
    /**
     * Metadata information on all properties of the `KpiItemLine` complex type.
     */
    const _propertyMetadata: PropertyMetadata<KpiItemLine>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): KpiItemLine;
}
//# sourceMappingURL=KpiItemLine.d.ts.map