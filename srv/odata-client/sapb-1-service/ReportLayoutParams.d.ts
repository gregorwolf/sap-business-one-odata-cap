import { ReportLayoutCategoryEnum } from './ReportLayoutCategoryEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ReportLayoutParams
 */
export interface ReportLayoutParams {
    /**
     * Layout Code.
     * @nullable
     */
    layoutCode?: string;
    /**
     * Layout Name.
     * @nullable
     */
    layoutName?: string;
    /**
     * Category.
     * @nullable
     */
    category?: ReportLayoutCategoryEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[ReportLayoutParams.build]] instead.
 */
export declare function createReportLayoutParams(json: any): ReportLayoutParams;
/**
 * ReportLayoutParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ReportLayoutParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ReportLayoutParams> {
    /**
     * Representation of the [[ReportLayoutParams.layoutCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    layoutCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutParams.layoutName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    layoutName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutParams.category]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    category: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of ReportLayoutParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ReportLayoutParams {
    /**
     * Metadata information on all properties of the `ReportLayoutParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ReportLayoutParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ReportLayoutParams;
}
//# sourceMappingURL=ReportLayoutParams.d.ts.map