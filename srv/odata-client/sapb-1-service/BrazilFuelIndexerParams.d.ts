import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * BrazilFuelIndexerParams
 */
export interface BrazilFuelIndexerParams {
    /**
     * Fuel Id.
     * @nullable
     */
    fuelId?: number;
    /**
     * Fuel Group Code.
     * @nullable
     */
    fuelGroupCode?: number;
    /**
     * Fuel Code.
     * @nullable
     */
    fuelCode?: string;
    /**
     * Description.
     * @nullable
     */
    description?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[BrazilFuelIndexerParams.build]] instead.
 */
export declare function createBrazilFuelIndexerParams(json: any): BrazilFuelIndexerParams;
/**
 * BrazilFuelIndexerParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BrazilFuelIndexerParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BrazilFuelIndexerParams.fuelId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fuelId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BrazilFuelIndexerParams.fuelGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fuelGroupCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BrazilFuelIndexerParams.fuelCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fuelCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BrazilFuelIndexerParams.description]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    description: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace BrazilFuelIndexerParams {
    function build(json: {
        [keys: string]: FieldType;
    }): BrazilFuelIndexerParams;
}
//# sourceMappingURL=BrazilFuelIndexerParams.d.ts.map