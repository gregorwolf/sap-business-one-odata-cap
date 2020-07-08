/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class DocumentInstallmentField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace DocumentInstallment {
  export function build(json: { [keys: string]: FieldType }): DocumentInstallment {
    return createComplexType(json, {
      DueDate: (dueDate: Moment) => ({ dueDate: edmToTs(dueDate, 'Edm.DateTimeOffset') }),
      Percentage: (percentage: number) => ({ percentage: edmToTs(percentage, 'Edm.Double') }),
      Total: (total: number) => ({ total: edmToTs(total, 'Edm.Double') }),
      LastDunningDate: (lastDunningDate: Moment) => ({ lastDunningDate: edmToTs(lastDunningDate, 'Edm.DateTimeOffset') }),
      DunningLevel: (dunningLevel: number) => ({ dunningLevel: edmToTs(dunningLevel, 'Edm.Int32') }),
      TotalFC: (totalFc: number) => ({ totalFc: edmToTs(totalFc, 'Edm.Double') }),
      InstallmentId: (installmentId: number) => ({ installmentId: edmToTs(installmentId, 'Edm.Int32') })
    });
  }
}
