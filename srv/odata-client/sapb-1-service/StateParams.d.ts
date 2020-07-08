import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * StateParams
 */
export interface StateParams {
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Country.
     * @nullable
     */
    country?: string;
    /**
     * Name.
     * @nullable
     */
    name?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[StateParams.build]] instead.
 */
export declare function createStateParams(json: any): StateParams;
/**
 * StateParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class StateParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[StateParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[StateParams.country]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    country: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[StateParams.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace StateParams {
    function build(json: {
        [keys: string]: FieldType;
    }): StateParams;
}
//# sourceMappingURL=StateParams.d.ts.map