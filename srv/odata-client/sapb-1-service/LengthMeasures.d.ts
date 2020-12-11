import { LengthMeasuresRequestBuilder } from './LengthMeasuresRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "LengthMeasures" of service "SAPB1".
 */
export declare class LengthMeasures extends EntityV4 implements LengthMeasuresType {
    /**
     * Technical entity name for LengthMeasures.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Unit Code.
     * @nullable
     */
    unitCode?: number;
    /**
     * Unit Display.
     * @nullable
     */
    unitDisplay?: string;
    /**
     * Unit Name.
     * @nullable
     */
    unitName?: string;
    /**
     * Unit Codefor Quantity Display.
     * @nullable
     */
    unitCodeforQuantityDisplay?: string;
    /**
     * Unit Lengthinmm.
     * @nullable
     */
    unitLengthinmm?: number;
    /**
     * Returns an entity builder to construct instances of `LengthMeasures`.
     * @returns A builder that constructs instances of entity type `LengthMeasures`.
     */
    static builder(): EntityBuilderType<LengthMeasures, LengthMeasuresType>;
    /**
     * Returns a request builder to construct requests for operations on the `LengthMeasures` entity type.
     * @returns A `LengthMeasures` request builder.
     */
    static requestBuilder(): LengthMeasuresRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `LengthMeasures`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `LengthMeasures`.
     */
    static customField(fieldName: string): CustomFieldV4<LengthMeasures>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface LengthMeasuresType {
    unitCode?: number | null;
    unitDisplay?: string | null;
    unitName?: string | null;
    unitCodeforQuantityDisplay?: string | null;
    unitLengthinmm?: number | null;
}
export declare namespace LengthMeasures {
    /**
     * Static representation of the [[unitCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNIT_CODE: NumberField<LengthMeasures>;
    /**
     * Static representation of the [[unitDisplay]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNIT_DISPLAY: StringField<LengthMeasures>;
    /**
     * Static representation of the [[unitName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNIT_NAME: StringField<LengthMeasures>;
    /**
     * Static representation of the [[unitCodeforQuantityDisplay]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNIT_CODEFOR_QUANTITY_DISPLAY: StringField<LengthMeasures>;
    /**
     * Static representation of the [[unitLengthinmm]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNIT_LENGTHINMM: NumberField<LengthMeasures>;
    /**
     * All fields of the LengthMeasures entity.
     */
    const _allFields: Array<NumberField<LengthMeasures> | StringField<LengthMeasures>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<LengthMeasures>;
    /**
     * All key fields of the LengthMeasures entity.
     */
    const _keyFields: Array<Field<LengthMeasures>>;
    /**
     * Mapping of all key field names to the respective static field property LengthMeasures.
     */
    const _keys: {
        [keys: string]: Field<LengthMeasures>;
    };
}
//# sourceMappingURL=LengthMeasures.d.ts.map