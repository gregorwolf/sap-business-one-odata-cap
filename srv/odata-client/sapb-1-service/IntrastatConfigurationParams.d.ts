import { Moment } from 'moment';
import { IntrastatConfigurationEnum } from './IntrastatConfigurationEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
     * Conf Type.
     * @nullable
     */
    confType?: IntrastatConfigurationEnum;
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
export declare class IntrastatConfigurationParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, IntrastatConfigurationParams> {
    /**
     * Representation of the [[IntrastatConfigurationParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[IntrastatConfigurationParams.confType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    confType: ComplexTypeEnumPropertyField<EntityT>;
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
    /**
     * Creates an instance of IntrastatConfigurationParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace IntrastatConfigurationParams {
    /**
     * Metadata information on all properties of the `IntrastatConfigurationParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<IntrastatConfigurationParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): IntrastatConfigurationParams;
}
//# sourceMappingURL=IntrastatConfigurationParams.d.ts.map