/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ItemPeriodControl
 */
export interface ItemPeriodControl {
  /**
   * Fiscal Year.
   * @nullable
   */
  fiscalYear?: string;
  /**
   * Depreciation Area.
   * @nullable
   */
  depreciationArea?: string;
  /**
   * Sub Period.
   * @nullable
   */
  subPeriod?: number;
  /**
   * Factor.
   * @nullable
   */
  factor?: number;
  /**
   * Actual Units.
   * @nullable
   */
  actualUnits?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ItemPeriodControl.build]] instead.
 */
export function createItemPeriodControl(json: any): ItemPeriodControl {
  return ItemPeriodControl.build(json);
}

/**
 * ItemPeriodControlField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ItemPeriodControlField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ItemPeriodControl.fiscalYear]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fiscalYear: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FiscalYear', this, 'Edm.String');
  /**
   * Representation of the [[ItemPeriodControl.depreciationArea]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  depreciationArea: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DepreciationArea', this, 'Edm.String');
  /**
   * Representation of the [[ItemPeriodControl.subPeriod]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subPeriod: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SubPeriod', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemPeriodControl.factor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  factor: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Factor', this, 'Edm.Double');
  /**
   * Representation of the [[ItemPeriodControl.actualUnits]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actualUnits: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ActualUnits', this, 'Edm.Int32');
}

export namespace ItemPeriodControl {
  export function build(json: { [keys: string]: FieldType }): ItemPeriodControl {
    return createComplexType(json, {
      FiscalYear: (fiscalYear: string) => ({ fiscalYear: edmToTs(fiscalYear, 'Edm.String') }),
      DepreciationArea: (depreciationArea: string) => ({ depreciationArea: edmToTs(depreciationArea, 'Edm.String') }),
      SubPeriod: (subPeriod: number) => ({ subPeriod: edmToTs(subPeriod, 'Edm.Int32') }),
      Factor: (factor: number) => ({ factor: edmToTs(factor, 'Edm.Double') }),
      ActualUnits: (actualUnits: number) => ({ actualUnits: edmToTs(actualUnits, 'Edm.Int32') })
    });
  }
}
