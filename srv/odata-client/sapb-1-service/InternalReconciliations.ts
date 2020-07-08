/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InternalReconciliationsRequestBuilder } from './InternalReconciliationsRequestBuilder';
import { Moment } from 'moment';
import { InternalReconciliationRow, InternalReconciliationRowField } from './InternalReconciliationRow';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "InternalReconciliations" of service "SAPB1".
 */
export class InternalReconciliations extends Entity implements InternalReconciliationsType {
  /**
   * Technical entity name for InternalReconciliations.
   */
  static _entityName = 'InternalReconciliations';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for InternalReconciliations.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
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
   * Returns an entity builder to construct instances `InternalReconciliations`.
   * @returns A builder that constructs instances of entity type `InternalReconciliations`.
   */
  static builder(): EntityBuilderType<InternalReconciliations, InternalReconciliationsTypeForceMandatory> {
    return Entity.entityBuilder(InternalReconciliations);
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
  static customField(fieldName: string): CustomField<InternalReconciliations> {
    return Entity.customFieldSelector(fieldName, InternalReconciliations);
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
  reconNum?: number;
  reconDate?: Moment;
  total?: number;
  cancelAbs?: number;
  internalReconciliationRows?: InternalReconciliationRow[];
}

export interface InternalReconciliationsTypeForceMandatory {
  reconNum: number;
  reconDate: Moment;
  total: number;
  cancelAbs: number;
  internalReconciliationRows: InternalReconciliationRow[];
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
  export const INTERNAL_RECONCILIATION_ROWS: CollectionField<InternalReconciliations> = new CollectionField('InternalReconciliationRows', InternalReconciliations, new InternalReconciliationRowField('', InternalReconciliations));
  /**
   * All fields of the InternalReconciliations entity.
   */
  export const _allFields: Array<NumberField<InternalReconciliations> | DateField<InternalReconciliations> | CollectionField<InternalReconciliations>> = [
    InternalReconciliations.RECON_NUM,
    InternalReconciliations.RECON_DATE,
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
