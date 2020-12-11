/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InternalReconciliationsRequestBuilder } from './InternalReconciliationsRequestBuilder';
import { Moment } from 'moment';
import { InternalReconciliationRow } from './InternalReconciliationRow';
import { CardOrAccountEnum } from './CardOrAccountEnum';
import { ReconTypeEnum } from './ReconTypeEnum';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "InternalReconciliations" of service "SAPB1".
 */
export class InternalReconciliations extends EntityV4 implements InternalReconciliationsType {
  /**
   * Technical entity name for InternalReconciliations.
   */
  static _entityName = 'InternalReconciliations';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Recon Num.
   * @nullable
   */
  reconNum?: number;
  /**
   * Recon Date.
   * @nullable
   */
  reconDate?: Moment;
  /**
   * Card Or Account.
   * @nullable
   */
  cardOrAccount?: CardOrAccountEnum;
  /**
   * Recon Type.
   * @nullable
   */
  reconType?: ReconTypeEnum;
  /**
   * Total.
   * @nullable
   */
  total?: number;
  /**
   * Cancel Abs.
   * @nullable
   */
  cancelAbs?: number;
  /**
   * Internal Reconciliation Rows.
   * @nullable
   */
  internalReconciliationRows?: InternalReconciliationRow[];

  /**
   * Returns an entity builder to construct instances of `InternalReconciliations`.
   * @returns A builder that constructs instances of entity type `InternalReconciliations`.
   */
  static builder(): EntityBuilderType<InternalReconciliations, InternalReconciliationsType> {
    return EntityV4.entityBuilder(InternalReconciliations);
  }

  /**
   * Returns a request builder to construct requests for operations on the `InternalReconciliations` entity type.
   * @returns A `InternalReconciliations` request builder.
   */
  static requestBuilder(): InternalReconciliationsRequestBuilder {
    return new InternalReconciliationsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `InternalReconciliations`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `InternalReconciliations`.
   */
  static customField(fieldName: string): CustomFieldV4<InternalReconciliations> {
    return EntityV4.customFieldSelector(fieldName, InternalReconciliations);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface InternalReconciliationsType {
  reconNum?: number | null;
  reconDate?: Moment | null;
  cardOrAccount?: CardOrAccountEnum | null;
  reconType?: ReconTypeEnum | null;
  total?: number | null;
  cancelAbs?: number | null;
  internalReconciliationRows?: InternalReconciliationRow[] | null;
}

export namespace InternalReconciliations {
  /**
   * Static representation of the [[reconNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECON_NUM: NumberField<InternalReconciliations> = new NumberField('ReconNum', InternalReconciliations, 'Edm.Int32');
  /**
   * Static representation of the [[reconDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECON_DATE: DateField<InternalReconciliations> = new DateField('ReconDate', InternalReconciliations, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[cardOrAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_OR_ACCOUNT: EnumField<InternalReconciliations> = new EnumField('CardOrAccount', InternalReconciliations);
  /**
   * Static representation of the [[reconType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECON_TYPE: EnumField<InternalReconciliations> = new EnumField('ReconType', InternalReconciliations);
  /**
   * Static representation of the [[total]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL: NumberField<InternalReconciliations> = new NumberField('Total', InternalReconciliations, 'Edm.Double');
  /**
   * Static representation of the [[cancelAbs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANCEL_ABS: NumberField<InternalReconciliations> = new NumberField('CancelAbs', InternalReconciliations, 'Edm.Int32');
  /**
   * Static representation of the [[internalReconciliationRows]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERNAL_RECONCILIATION_ROWS: CollectionField<InternalReconciliations, InternalReconciliationRow> = new CollectionField('InternalReconciliationRows', InternalReconciliations, InternalReconciliationRow);
  /**
   * All fields of the InternalReconciliations entity.
   */
  export const _allFields: Array<NumberField<InternalReconciliations> | DateField<InternalReconciliations> | EnumField<InternalReconciliations> | CollectionField<InternalReconciliations, InternalReconciliationRow>> = [
    InternalReconciliations.RECON_NUM,
    InternalReconciliations.RECON_DATE,
    InternalReconciliations.CARD_OR_ACCOUNT,
    InternalReconciliations.RECON_TYPE,
    InternalReconciliations.TOTAL,
    InternalReconciliations.CANCEL_ABS,
    InternalReconciliations.INTERNAL_RECONCILIATION_ROWS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<InternalReconciliations> = new AllFields('*', InternalReconciliations);
  /**
   * All key fields of the InternalReconciliations entity.
   */
  export const _keyFields: Array<Field<InternalReconciliations>> = [InternalReconciliations.RECON_NUM];
  /**
   * Mapping of all key field names to the respective static field property InternalReconciliations.
   */
  export const _keys: { [keys: string]: Field<InternalReconciliations> } = InternalReconciliations._keyFields.reduce((acc: { [keys: string]: Field<InternalReconciliations> }, field: Field<InternalReconciliations>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
