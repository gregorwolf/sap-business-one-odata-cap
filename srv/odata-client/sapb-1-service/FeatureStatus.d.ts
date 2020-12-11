import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * FeatureStatus
 */
export interface FeatureStatus {
    /**
     * Feature Id.
     * @nullable
     */
    featureId?: string;
    /**
     * Blocked.
     * @nullable
     */
    blocked?: BoYesNoEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[FeatureStatus.build]] instead.
 */
export declare function createFeatureStatus(json: any): FeatureStatus;
/**
 * FeatureStatusField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class FeatureStatusField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, FeatureStatus> {
    /**
     * Representation of the [[FeatureStatus.featureId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    featureId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[FeatureStatus.blocked]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    blocked: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of FeatureStatusField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace FeatureStatus {
    /**
     * Metadata information on all properties of the `FeatureStatus` complex type.
     */
    const _propertyMetadata: PropertyMetadata<FeatureStatus>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): FeatureStatus;
}
//# sourceMappingURL=FeatureStatus.d.ts.map