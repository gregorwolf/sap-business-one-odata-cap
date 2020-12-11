/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { InternalReconciliationBp } from './InternalReconciliationBp';
import { CardOrAccountEnum } from './CardOrAccountEnum';
import { ReconSelectDateTypeEnum } from './ReconSelectDateTypeEnum';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
   * Card Or Account.
   * @nullable
   */
  cardOrAccount?: CardOrAccountEnum;
  /**
   * Account No.
   * @nullable
   */
  accountNo?: string;
  /**
   * Date Type.
   * @nullable
   */
  dateType?: ReconSelectDateTypeEnum;
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
  internalReconciliationBPs?: InternalReconciliationBp[];
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
export class InternalReconciliationOpenTransParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, InternalReconciliationOpenTransParams> {
  /**
   * Representation of the [[InternalReconciliationOpenTransParams.reconDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reconDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ReconDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[InternalReconciliationOpenTransParams.cardOrAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cardOrAccount: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('CardOrAccount', this);
  /**
   * Representation of the [[InternalReconciliationOpenTransParams.accountNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountNo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AccountNo', this, 'Edm.String');
  /**
   * Representation of the [[InternalReconciliationOpenTransParams.dateType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dateType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('DateType', this);
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
  internalReconciliationBPs: CollectionField<EntityT, InternalReconciliationBp> = new CollectionField('InternalReconciliationBPs', this, InternalReconciliationBp);

  /**
   * Creates an instance of InternalReconciliationOpenTransParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, InternalReconciliationOpenTransParams);
  }
}

export namespace InternalReconciliationOpenTransParams {
  /**
   * Metadata information on all properties of the `InternalReconciliationOpenTransParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<InternalReconciliationOpenTransParams>[] = [{
    originalName: 'ReconDate',
    name: 'reconDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'CardOrAccount',
    name: 'cardOrAccount',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'AccountNo',
    name: 'accountNo',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DateType',
    name: 'dateType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'FromDate',
    name: 'fromDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'ToDate',
    name: 'toDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'InternalReconciliationBPs',
    name: 'internalReconciliationBPs',
    type: InternalReconciliationBp,
    isCollection: true
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType | InternalReconciliationBp }): InternalReconciliationOpenTransParams {
    return deserializeComplexTypeV4(json, InternalReconciliationOpenTransParams);
  }
}
