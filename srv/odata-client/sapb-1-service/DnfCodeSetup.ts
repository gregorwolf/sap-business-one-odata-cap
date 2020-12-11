/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DnfCodeSetupRequestBuilder } from './DnfCodeSetupRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "DNFCodeSetup" of service "SAPB1".
 */
export class DnfCodeSetup extends EntityV4 implements DnfCodeSetupType {
  /**
   * Technical entity name for DnfCodeSetup.
   */
  static _entityName = 'DNFCodeSetup';
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
  ncmCode?: number;
  /**
   * Dnf Code.
   * @nullable
   */
  dnfCode?: string;
  /**
   * Uo M.
   * @nullable
   */
  uoM?: string;
  /**
   * Factor.
   * @nullable
   */
  factor?: number;
  /**
   * One-to-many navigation property to the [[Items]] entity.
   */
  items!: Items[];
  /**
   * One-to-one navigation property to the [[NcmCodesSetup]] entity.
   */
  ncmCodeSetup!: NcmCodesSetup;

  /**
   * Returns an entity builder to construct instances of `DnfCodeSetup`.
   * @returns A builder that constructs instances of entity type `DnfCodeSetup`.
   */
  static builder(): EntityBuilderType<DnfCodeSetup, DnfCodeSetupType> {
    return EntityV4.entityBuilder(DnfCodeSetup);
  }

  /**
   * Returns a request builder to construct requests for operations on the `DnfCodeSetup` entity type.
   * @returns A `DnfCodeSetup` request builder.
   */
  static requestBuilder(): DnfCodeSetupRequestBuilder {
    return new DnfCodeSetupRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `DnfCodeSetup`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `DnfCodeSetup`.
   */
  static customField(fieldName: string): CustomFieldV4<DnfCodeSetup> {
    return EntityV4.customFieldSelector(fieldName, DnfCodeSetup);
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
import { NcmCodesSetup, NcmCodesSetupType } from './NcmCodesSetup';

export interface DnfCodeSetupType {
  absEntry?: number | null;
  ncmCode?: number | null;
  dnfCode?: string | null;
  uoM?: string | null;
  factor?: number | null;
  items: ItemsType[];
  ncmCodeSetup: NcmCodesSetupType;
}

export namespace DnfCodeSetup {
  /**
   * Static representation of the [[absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABS_ENTRY: NumberField<DnfCodeSetup> = new NumberField('AbsEntry', DnfCodeSetup, 'Edm.Int32');
  /**
   * Static representation of the [[ncmCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NCM_CODE: NumberField<DnfCodeSetup> = new NumberField('NCMCode', DnfCodeSetup, 'Edm.Int32');
  /**
   * Static representation of the [[dnfCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DNF_CODE: StringField<DnfCodeSetup> = new StringField('DNFCode', DnfCodeSetup, 'Edm.String');
  /**
   * Static representation of the [[uoM]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UO_M: StringField<DnfCodeSetup> = new StringField('UoM', DnfCodeSetup, 'Edm.String');
  /**
   * Static representation of the [[factor]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FACTOR: NumberField<DnfCodeSetup> = new NumberField('Factor', DnfCodeSetup, 'Edm.Double');
  /**
   * Static representation of the one-to-many navigation property [[items]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEMS: OneToManyLink<DnfCodeSetup, Items> = new OneToManyLink('Items', DnfCodeSetup, Items);
  /**
   * Static representation of the one-to-one navigation property [[ncmCodeSetup]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NCM_CODE_SETUP: OneToOneLink<DnfCodeSetup, NcmCodesSetup> = new OneToOneLink('NCMCodeSetup', DnfCodeSetup, NcmCodesSetup);
  /**
   * All fields of the DnfCodeSetup entity.
   */
  export const _allFields: Array<NumberField<DnfCodeSetup> | StringField<DnfCodeSetup> | OneToManyLink<DnfCodeSetup, Items> | OneToOneLink<DnfCodeSetup, NcmCodesSetup>> = [
    DnfCodeSetup.ABS_ENTRY,
    DnfCodeSetup.NCM_CODE,
    DnfCodeSetup.DNF_CODE,
    DnfCodeSetup.UO_M,
    DnfCodeSetup.FACTOR,
    DnfCodeSetup.ITEMS,
    DnfCodeSetup.NCM_CODE_SETUP
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<DnfCodeSetup> = new AllFields('*', DnfCodeSetup);
  /**
   * All key fields of the DnfCodeSetup entity.
   */
  export const _keyFields: Array<Field<DnfCodeSetup>> = [DnfCodeSetup.ABS_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property DnfCodeSetup.
   */
  export const _keys: { [keys: string]: Field<DnfCodeSetup> } = DnfCodeSetup._keyFields.reduce((acc: { [keys: string]: Field<DnfCodeSetup> }, field: Field<DnfCodeSetup>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
