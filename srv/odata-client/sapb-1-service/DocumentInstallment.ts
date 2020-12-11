/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * DocumentInstallment
 */
export interface DocumentInstallment {
  /**
   * Due Date.
   * @nullable
   */
  dueDate?: Moment;
  /**
   * Percentage.
   * @nullable
   */
  percentage?: number;
  /**
   * Total.
   * @nullable
   */
  total?: number;
  /**
   * Last Dunning Date.
   * @nullable
   */
  lastDunningDate?: Moment;
  /**
   * Dunning Level.
   * @nullable
   */
  dunningLevel?: number;
  /**
   * Total Fc.
   * @nullable
   */
  totalFc?: number;
  /**
   * Installment Id.
   * @nullable
   */
  installmentId?: number;
  /**
   * Payment Ordered.
   * @nullable
   */
  paymentOrdered?: BoYesNoEnum;
}

/**
 * @deprecated Since v1.6.0. Use [[DocumentInstallment.build]] instead.
 */
export function createDocumentInstallment(json: any): DocumentInstallment {
  return DocumentInstallment.build(json);
}

/**
 * DocumentInstallmentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DocumentInstallmentField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DocumentInstallment> {
  /**
   * Representation of the [[DocumentInstallment.dueDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dueDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('DueDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[DocumentInstallment.percentage]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  percentage: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Percentage', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentInstallment.total]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  total: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Total', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentInstallment.lastDunningDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lastDunningDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('LastDunningDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[DocumentInstallment.dunningLevel]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dunningLevel: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DunningLevel', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentInstallment.totalFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TotalFC', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentInstallment.installmentId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  installmentId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('InstallmentId', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentInstallment.paymentOrdered]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentOrdered: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('PaymentOrdered', this);

  /**
   * Creates an instance of DocumentInstallmentField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, DocumentInstallment);
  }
}

export namespace DocumentInstallment {
  /**
   * Metadata information on all properties of the `DocumentInstallment` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DocumentInstallment>[] = [{
    originalName: 'DueDate',
    name: 'dueDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'Percentage',
    name: 'percentage',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Total',
    name: 'total',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'LastDunningDate',
    name: 'lastDunningDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'DunningLevel',
    name: 'dunningLevel',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'TotalFC',
    name: 'totalFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'InstallmentId',
    name: 'installmentId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'PaymentOrdered',
    name: 'paymentOrdered',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): DocumentInstallment {
    return deserializeComplexTypeV4(json, DocumentInstallment);
  }
}
