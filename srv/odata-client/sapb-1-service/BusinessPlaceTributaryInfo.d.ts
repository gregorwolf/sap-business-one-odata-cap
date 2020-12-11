import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * BusinessPlaceTributaryInfo
 */
export interface BusinessPlaceTributaryInfo {
    /**
     * Bplid.
     * @nullable
     */
    bplid?: number;
    /**
     * Tributary Id.
     * @nullable
     */
    tributaryId?: number;
    /**
     * Tributary Type.
     * @nullable
     */
    tributaryType?: number;
    /**
     * Tt Start Date.
     * @nullable
     */
    ttStartDate?: Moment;
    /**
     * Tt End Date.
     * @nullable
     */
    ttEndDate?: Moment;
    /**
     * Tributary Regime Code.
     * @nullable
     */
    tributaryRegimeCode?: number;
    /**
     * Trc Start Date.
     * @nullable
     */
    trcStartDate?: Moment;
    /**
     * Trc End Date.
     * @nullable
     */
    trcEndDate?: Moment;
}
/**
 * @deprecated Since v1.6.0. Use [[BusinessPlaceTributaryInfo.build]] instead.
 */
export declare function createBusinessPlaceTributaryInfo(json: any): BusinessPlaceTributaryInfo;
/**
 * BusinessPlaceTributaryInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BusinessPlaceTributaryInfoField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BusinessPlaceTributaryInfo> {
    /**
     * Representation of the [[BusinessPlaceTributaryInfo.bplid]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bplid: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BusinessPlaceTributaryInfo.tributaryId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    tributaryId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BusinessPlaceTributaryInfo.tributaryType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    tributaryType: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BusinessPlaceTributaryInfo.ttStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    ttStartDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[BusinessPlaceTributaryInfo.ttEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    ttEndDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[BusinessPlaceTributaryInfo.tributaryRegimeCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    tributaryRegimeCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BusinessPlaceTributaryInfo.trcStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    trcStartDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[BusinessPlaceTributaryInfo.trcEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    trcEndDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Creates an instance of BusinessPlaceTributaryInfoField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace BusinessPlaceTributaryInfo {
    /**
     * Metadata information on all properties of the `BusinessPlaceTributaryInfo` complex type.
     */
    const _propertyMetadata: PropertyMetadata<BusinessPlaceTributaryInfo>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): BusinessPlaceTributaryInfo;
}
//# sourceMappingURL=BusinessPlaceTributaryInfo.d.ts.map