import { BrazilMultiIndexersRequestBuilder } from './BrazilMultiIndexersRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "BrazilMultiIndexers" of service "SAPB1".
 */
export declare class BrazilMultiIndexers extends Entity implements BrazilMultiIndexersType {
    /**
     * Technical entity name for BrazilMultiIndexers.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for BrazilMultiIndexers.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Id.
     * @nullable
     */
    id?: number;
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Description.
     * @nullable
     */
    description?: string;
    /**
     * First Ref Indexer Code.
     * @nullable
     */
    firstRefIndexerCode?: string;
    /**
     * Second Ref Indexer Code.
     * @nullable
     */
    secondRefIndexerCode?: string;
    /**
     * Third Ref Indexer Code.
     * @nullable
     */
    thirdRefIndexerCode?: string;
    /**
     * Returns an entity builder to construct instances `BrazilMultiIndexers`.
     * @returns A builder that constructs instances of entity type `BrazilMultiIndexers`.
     */
    static builder(): EntityBuilderType<BrazilMultiIndexers, BrazilMultiIndexersTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `BrazilMultiIndexers` entity type.
     * @returns A `BrazilMultiIndexers` request builder.
     */
    static requestBuilder(): BrazilMultiIndexersRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BrazilMultiIndexers`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BrazilMultiIndexers`.
     */
    static customField(fieldName: string): CustomField<BrazilMultiIndexers>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface BrazilMultiIndexersType {
    id?: number;
    code?: string;
    description?: string;
    firstRefIndexerCode?: string;
    secondRefIndexerCode?: string;
    thirdRefIndexerCode?: string;
}
export interface BrazilMultiIndexersTypeForceMandatory {
    id: number;
    code: string;
    description: string;
    firstRefIndexerCode: string;
    secondRefIndexerCode: string;
    thirdRefIndexerCode: string;
}
export declare namespace BrazilMultiIndexers {
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ID: NumberField<BrazilMultiIndexers>;
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<BrazilMultiIndexers>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<BrazilMultiIndexers>;
    /**
     * Static representation of the [[firstRefIndexerCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIRST_REF_INDEXER_CODE: StringField<BrazilMultiIndexers>;
    /**
     * Static representation of the [[secondRefIndexerCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECOND_REF_INDEXER_CODE: StringField<BrazilMultiIndexers>;
    /**
     * Static representation of the [[thirdRefIndexerCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const THIRD_REF_INDEXER_CODE: StringField<BrazilMultiIndexers>;
    /**
     * All fields of the BrazilMultiIndexers entity.
     */
    const _allFields: Array<NumberField<BrazilMultiIndexers> | StringField<BrazilMultiIndexers>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BrazilMultiIndexers>;
    /**
     * All key fields of the BrazilMultiIndexers entity.
     */
    const _keyFields: Array<Field<BrazilMultiIndexers>>;
    /**
     * Mapping of all key field names to the respective static field property BrazilMultiIndexers.
     */
    const _keys: {
        [keys: string]: Field<BrazilMultiIndexers>;
    };
}
//# sourceMappingURL=BrazilMultiIndexers.d.ts.map