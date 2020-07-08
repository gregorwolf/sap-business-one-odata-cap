import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * IntrastatConfigurationParams
 */
export interface IntrastatConfigurationParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Stat Code.
     * @nullable
     */
    statCode?: string;
    /**
     * Date From.
     * @nullable
     */
    dateFrom?: Moment;
    /**
     * Date To.
     * @nullable
     */
    dateTo?: Moment;
    /**
     * Country.
     * @nullable
     */
    country?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[IntrastatConfigurationParams.build]] instead.
 */
export declare function createIntrastatConfigurationParams(json: any): IntrastatConfigurationParams;
/**
 * IntrastatConfigurationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class IntrastatConfigurationParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[IntrastatConfigurationParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[IntrastatConfigurationParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[IntrastatConfigurationParams.statCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    statCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[IntrastatConfigurationParams.dateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dateFrom: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[IntrastatConfigurationParams.dateTo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dateTo: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[IntrastatConfigurationParams.country]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    country: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace IntrastatConfigurationParams {
    function build(json: {
        [keys: string]: FieldType;
    }): IntrastatConfigurationParams;
}
//# sourceMappingURL=IntrastatConfigurationParams.d.ts.map