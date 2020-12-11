/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { NcmCodesSetupRequestBuilder } from './NcmCodesSetupRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "NCMCodesSetup" of service "SAPB1".
 */
export class NcmCodesSetup extends EntityV4 implements NcmCodesSetupType {
  /**
   * Technical entity name for NcmCodesSetup.
   */
  static _entityName = 'NCMCodesSetup';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Ncm Code.
   * @nullable
   */
  ncmCode?: string;
  /**
   * Description.
   * @nullable
   */
  description?: string;
  /**
   * One-to-many navigation property to the [[Items]] entity.
   */
  items!: Items[];
  /**
   * One-to-many navigation property to the [[DnfCodeSetup]] entity.
   */
  dnfCodeSetup!: DnfCodeSetup[];

  /**
   * Returns an entity builder to construct instances of `NcmCodesSetup`.
   * @returns A builder that constructs instances of entity type `NcmCodesSetup`.
   */
  static builder(): EntityBuilderType<NcmCodesSetup, NcmCodesSetupType> {
    return EntityV4.entityBuilder(NcmCodesSetup);
  }

  /**
   * Returns a request builder to construct requests for operations on the `NcmCodesSetup` entity type.
   * @returns A `NcmCodesSetup` request builder.
   */
  static requestBuilder(): NcmCodesSetupRequestBuilder {
    return new NcmCodesSetupRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `NcmCodesSetup`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `NcmCodesSetup`.
   */
  static customField(fieldName: string): CustomFieldV4<NcmCodesSetup> {
    return EntityV4.customFieldSelector(fieldName, NcmCodesSetup);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Items, ItemsType } from './Items';
import { DnfCodeSetup, DnfCodeSetupType } from './DnfCodeSetup';

export interface NcmCodesSetupType {
  absEntry?: number | null;
  ncmCode?: string | null;
  description?: string | null;
  items: ItemsType[];
  dnfCodeSetup: DnfCodeSetupType[];
}

export namespace NcmCodesSetup {
  /**
   * Static representation of the [[absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABS_ENTRY: NumberField<NcmCodesSetup> = new NumberField('AbsEntry', NcmCodesSetup, 'Edm.Int32');
  /**
   * Static representation of the [[ncmCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NCM_CODE: StringField<NcmCodesSetup> = new StringField('NCMCode', NcmCodesSetup, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<NcmCodesSetup> = new StringField('Description', NcmCodesSetup, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[items]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEMS: OneToManyLink<NcmCodesSetup, Items> = new OneToManyLink('Items', NcmCodesSetup, Items);
  /**
   * Static representation of the one-to-many navigation property [[dnfCodeSetup]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DNF_CODE_SETUP: OneToManyLink<NcmCodesSetup, DnfCodeSetup> = new OneToManyLink('DNFCodeSetup', NcmCodesSetup, DnfCodeSetup);
  /**
   * All fields of the NcmCodesSetup entity.
   */
  export const _allFields: Array<NumberField<NcmCodesSetup> | StringField<NcmCodesSetup> | OneToManyLink<NcmCodesSetup, Items> | OneToManyLink<NcmCodesSetup, DnfCodeSetup>> = [
    NcmCodesSetup.ABS_ENTRY,
    NcmCodesSetup.NCM_CODE,
    NcmCodesSetup.DESCRIPTION,
    NcmCodesSetup.ITEMS,
    NcmCodesSetup.DNF_CODE_SETUP
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<NcmCodesSetup> = new AllFields('*', NcmCodesSetup);
  /**
   * All key fields of the NcmCodesSetup entity.
   */
  export const _keyFields: Array<Field<NcmCodesSetup>> = [NcmCodesSetup.ABS_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property NcmCodesSetup.
   */
  export const _keys: { [keys: string]: Field<NcmCodesSetup> } = NcmCodesSetup._keyFields.reduce((acc: { [keys: string]: Field<NcmCodesSetup> }, field: Field<NcmCodesSetup>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
