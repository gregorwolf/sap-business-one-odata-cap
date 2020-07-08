/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ItemDepreciationParameter
 */
export interface ItemDepreciationParameter {
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
   * Depreciation Start Date.
   * @nullable
   */
  depreciationStartDate?: Moment;
  /**
   * Depreciation End Date.
   * @nullable
   */
  depreciationEndDate?: Moment;
  /**
   * Useful Life.
   * @nullable
   */
  usefulLife?: number;
  /**
   * Remaining Life.
   * @nullable
   */
  remainingLife?: number;
  /**
   * Depreciation Type.
   * @nullable
   */
  depreciationType?: string;
  /**
   * Total Units In Useful Life.
   * @nullable
   */
  totalUnitsInUsefulLife?: number;
  /**
   * Remaining Units.
   * @nullable
   */
  remainingUnits?: number;
  /**
   * Standard Units.
   * @nullable
   */
  standardUnits?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ItemDepreciationParameter.build]] instead.
 */
export function createItemDepreciationParameter(json: any): ItemDepreciationParameter {
  return ItemDepreciationParameter.build(json);
}

/**
 * ItemDepreciationParameterField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ItemDepreciationParameterField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ItemDepreciationParameter.fiscalYear]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fiscalYear: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FiscalYear', this, 'Edm.String');
  /**
   * Representation of the [[ItemDepreciationParameter.depreciationArea]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  depreciationArea: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DepreciationArea', this, 'Edm.String');
  /**
   * Representation of the [[ItemDepreciationParameter.depreciationStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  depreciationStartDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('DepreciationStartDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ItemDepreciationParameter.depreciationEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  depreciationEndDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('DepreciationEndDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ItemDepreciationParameter.usefulLife]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  usefulLife: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UsefulLife', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemDepreciationParameter.remainingLife]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remainingLife: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RemainingLife', this, 'Edm.Double');
  /**
   * Representation of the [[ItemDepreciationParameter.depreciationType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  depreciationType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DepreciationType', this, 'Edm.String');
  /**
   * Representation of the [[ItemDepreciationParameter.totalUnitsInUsefulLife]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalUnitsInUsefulLife: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TotalUnitsInUsefulLife', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemDepreciationParameter.remainingUnits]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remainingUnits: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RemainingUnits', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemDepreciationParameter.standardUnits]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  standardUnits: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('StandardUnits', this, 'Edm.Int32');
}

export namespace ItemDepreciationParameter {
  export function build(json: { [keys: string]: FieldType }): ItemDepreciationParameter {
    return createComplexType(json, {
      FiscalYear: (fiscalYear: string) => ({ fiscalYear: edmToTs(fiscalYear, 'Edm.String') }),
      DepreciationArea: (depreciationArea: string) => ({ depreciationArea: edmToTs(depreciationArea, 'Edm.String') }),
      DepreciationStartDate: (depreciationStartDate: Moment) => ({ depreciationStartDate: edmToTs(depreciationStartDate, 'Edm.DateTimeOffset') }),
      DepreciationEndDate: (depreciationEndDate: Moment) => ({ depreciationEndDate: edmToTs(depreciationEndDate, 'Edm.DateTimeOffset') }),
      UsefulLife: (usefulLife: number) => ({ usefulLife: edmToTs(usefulLife, 'Edm.Int32') }),
      RemainingLife: (remainingLife: number) => ({ remainingLife: edmToTs(remainingLife, 'Edm.Double') }),
      DepreciationType: (depreciationType: string) => ({ depreciationType: edmToTs(depreciationType, 'Edm.String') }),
      TotalUnitsInUsefulLife: (totalUnitsInUsefulLife: number) => ({ totalUnitsInUsefulLife: edmToTs(totalUnitsInUsefulLife, 'Edm.Int32') }),
      RemainingUnits: (remainingUnits: number) => ({ remainingUnits: edmToTs(remainingUnits, 'Edm.Int32') }),
      StandardUnits: (standardUnits: number) => ({ standardUnits: edmToTs(standardUnits, 'Edm.Int32') })
    });
  }
}
