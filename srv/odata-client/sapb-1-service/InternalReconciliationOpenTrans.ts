/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { InternalReconciliationOpenTransRow, InternalReconciliationOpenTransRowField } from './InternalReconciliationOpenTransRow';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * InternalReconciliationOpenTrans
 */
export interface InternalReconciliationOpenTrans {
  /**
   * Recon Date.
   * @nullable
   */
  reconDate?: Moment;
  /**
   * Internal Reconciliation Open Trans Rows.
   * @nullable
   */
  internalReconciliationOpenTransRows?: InternalReconciliationOpenTransRow;
}

/**
 * @deprecated Since v1.6.0. Use [[InternalReconciliationOpenTrans.build]] instead.
 */
export function createInternalReconciliationOpenTrans(json: any): InternalReconciliationOpenTrans {
  return InternalReconciliationOpenTrans.build(json);
}

/**
 * InternalReconciliationOpenTransField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class InternalReconciliationOpenTransField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[InternalReconciliationOpenTrans.reconDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reconDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ReconDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[InternalReconciliationOpenTrans.internalReconciliationOpenTransRows]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  internalReconciliationOpenTransRows: InternalReconciliationOpenTransRowField<EntityT> = new InternalReconciliationOpenTransRowField('InternalReconciliationOpenTransRows', this);
}

export namespace InternalReconciliationOpenTrans {
  export function build(json: { [keys: string]: FieldType | InternalReconciliationOpenTransRow }): InternalReconciliationOpenTrans {
    return createComplexType(json, {
      ReconDate: (reconDate: Moment) => ({ reconDate: edmToTs(reconDate, 'Edm.DateTimeOffset') }),
      InternalReconciliationOpenTransRows: (internalReconciliationOpenTransRows: InternalReconciliationOpenTransRow) => ({ internalReconciliationOpenTransRows: InternalReconciliationOpenTransRow.build(internalReconciliationOpenTransRows) })
    });
  }
}
