import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * FeatureStatus
 */
export interface FeatureStatus {
    /**
     * Feature Id.
     * @nullable
     */
    featureId?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[FeatureStatus.build]] instead.
 */
export declare function createFeatureStatus(json: any): FeatureStatus;
/**
 * FeatureStatusField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class FeatureStatusField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[FeatureStatus.featureId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    featureId: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace FeatureStatus {
    function build(json: {
        [keys: string]: FieldType;
    }): FeatureStatus;
}
//# sourceMappingURL=FeatureStatus.d.ts.map