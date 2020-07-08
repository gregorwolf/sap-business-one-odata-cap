/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { InternalReconciliationBp, InternalReconciliationBpField } from './InternalReconciliationBp';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * InternalReconciliationOpenTransParams
 */
export interface InternalReconciliationOpenTransParams {
  /**
   * Recon Date.
   * @nullable
   */
  reconDate?: Moment;
  /**
   * Account No.
   * @nullable
   */
  accountNo?: string;
  /**
   * From Date.
   * @nullable
   */
  fromDate?: Moment;
  /**
   * To Date.
   * @nullable
   */
  toDate?: Moment;
  /**
   * Internal Reconciliation B Ps.
   * @nullable
   */
  internalReconciliationBPs?: InternalReconciliationBp;
}

/**
 * @deprecated Since v1.6.0. Use [[InternalReconciliationOpenTransParams.build]] instead.
 */
export function createInternalReconciliationOpenTransParams(json: any): InternalReconciliationOpenTransParams {
  return InternalReconciliationOpenTransParams.build(json);
}

/**
 * InternalReconciliationOpenTransParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class InternalReconciliationOpenTransParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[InternalReconciliationOpenTransParams.reconDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reconDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ReconDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[InternalReconciliationOpenTransParams.accountNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountNo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AccountNo', this, 'Edm.String');
  /**
   * Representation of the [[InternalReconciliationOpenTransParams.fromDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fromDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('FromDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[InternalReconciliationOpenTransParams.toDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  toDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ToDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[InternalReconciliationOpenTransParams.internalReconciliationBPs]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  internalReconciliationBPs: InternalReconciliationBpField<EntityT> = new InternalReconciliationBpField('InternalReconciliationBPs', this);
}

export namespace InternalReconciliationOpenTransParams {
  export function build(json: { [keys: string]: FieldType | InternalReconciliationBp }): InternalReconciliationOpenTransParams {
    return createComplexType(json, {
      ReconDate: (reconDate: Moment) => ({ reconDate: edmToTs(reconDate, 'Edm.DateTimeOffset') }),
      AccountNo: (accountNo: string) => ({ accountNo: edmToTs(accountNo, 'Edm.String') }),
      FromDate: (fromDate: Moment) => ({ fromDate: edmToTs(fromDate, 'Edm.DateTimeOffset') }),
      ToDate: (toDate: Moment) => ({ toDate: edmToTs(toDate, 'Edm.DateTimeOffset') }),
      InternalReconciliationBPs: (internalReconciliationBPs: InternalReconciliationBp) => ({ internalReconciliationBPs: InternalReconciliationBp.build(internalReconciliationBPs) })
    });
  }
}
