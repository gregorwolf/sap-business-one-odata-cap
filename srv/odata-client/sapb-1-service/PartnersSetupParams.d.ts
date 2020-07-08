import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * PartnersSetupParams
 */
export interface PartnersSetupParams {
    /**
     * Partner Id.
     * @nullable
     */
    partnerId?: number;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Default Relationship.
     * @nullable
     */
    defaultRelationship?: number;
    /**
     * Related Bp.
     * @nullable
     */
    relatedBp?: string;
    /**
     * Details.
     * @nullable
     */
    details?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[PartnersSetupParams.build]] instead.
 */
export declare function createPartnersSetupParams(json: any): PartnersSetupParams;
/**
 * PartnersSetupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PartnersSetupParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[PartnersSetupParams.partnerId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    partnerId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PartnersSetupParams.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PartnersSetupParams.defaultRelationship]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    defaultRelationship: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PartnersSetupParams.relatedBp]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    relatedBp: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PartnersSetupParams.details]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    details: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace PartnersSetupParams {
    function build(json: {
        [keys: string]: FieldType;
    }): PartnersSetupParams;
}
//# sourceMappingURL=PartnersSetupParams.d.ts.map