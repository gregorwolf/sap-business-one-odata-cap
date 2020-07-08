/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxCodeDeterminationTcdKeyFieldValue, TaxCodeDeterminationTcdKeyFieldValueField } from './TaxCodeDeterminationTcdKeyFieldValue';
import { CollectionField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * TaxCodeDeterminationTcdKeyField
 */
export interface TaxCodeDeterminationTcdKeyField {
  /**
   * Abs Id.
   * @nullable
   */
  absId?: number;
  /**
   * Descr.
   * @nullable
   */
  descr?: string;
  /**
   * Priority.
   * @nullable
   */
  priority?: number;
  /**
   * Key Fld 1.
   * @nullable
   */
  keyFld1?: number;
  /**
   * Udf Table 1.
   * @nullable
   */
  udfTable1?: string;
  /**
   * Udf Alias 1.
   * @nullable
   */
  udfAlias1?: string;
  /**
   * Key Fld 2.
   * @nullable
   */
  keyFld2?: number;
  /**
   * Udf Table 2.
   * @nullable
   */
  udfTable2?: string;
  /**
   * Udf Alias 2.
   * @nullable
   */
  udfAlias2?: string;
  /**
   * Key Fld 3.
   * @nullable
   */
  keyFld3?: number;
  /**
   * Udf Table 3.
   * @nullable
   */
  udfTable3?: string;
  /**
   * Udf Alias 3.
   * @nullable
   */
  udfAlias3?: string;
  /**
   * Key Fld 4.
   * @nullable
   */
  keyFld4?: number;
  /**
   * Udf Table 4.
   * @nullable
   */
  udfTable4?: string;
  /**
   * Udf Alias 4.
   * @nullable
   */
  udfAlias4?: string;
  /**
   * Tax Code Determination Tcd Key Field Values.
   * @nullable
   */
  taxCodeDeterminationTcdKeyFieldValues?: TaxCodeDeterminationTcdKeyFieldValue;
}

/**
 * @deprecated Since v1.6.0. Use [[TaxCodeDeterminationTcdKeyField.build]] instead.
 */
export function createTaxCodeDeterminationTcdKeyField(json: any): TaxCodeDeterminationTcdKeyField {
  return TaxCodeDeterminationTcdKeyField.build(json);
}

/**
 * TaxCodeDeterminationTcdKeyFieldField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TaxCodeDeterminationTcdKeyFieldField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyField.absId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsId', this, 'Edm.Int32');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyField.descr]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  descr: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Descr', this, 'Edm.String');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyField.priority]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priority: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Priority', this, 'Edm.Int32');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyField.keyFld1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  keyFld1: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('KeyFld_1', this, 'Edm.Int32');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyField.udfTable1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  udfTable1: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UDFTable_1', this, 'Edm.String');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyField.udfAlias1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  udfAlias1: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UDFAlias_1', this, 'Edm.String');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyField.keyFld2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  keyFld2: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('KeyFld_2', this, 'Edm.Int32');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyField.udfTable2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  udfTable2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UDFTable_2', this, 'Edm.String');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyField.udfAlias2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  udfAlias2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UDFAlias_2', this, 'Edm.String');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyField.keyFld3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  keyFld3: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('KeyFld_3', this, 'Edm.Int32');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyField.udfTable3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  udfTable3: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UDFTable_3', this, 'Edm.String');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyField.udfAlias3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  udfAlias3: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UDFAlias_3', this, 'Edm.String');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyField.keyFld4]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  keyFld4: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('KeyFld_4', this, 'Edm.Int32');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyField.udfTable4]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  udfTable4: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UDFTable_4', this, 'Edm.String');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyField.udfAlias4]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  udfAlias4: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UDFAlias_4', this, 'Edm.String');
  /**
   * Representation of the [[TaxCodeDeterminationTcdKeyField.taxCodeDeterminationTcdKeyFieldValues]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxCodeDeterminationTcdKeyFieldValues: TaxCodeDeterminationTcdKeyFieldValueField<EntityT> = new TaxCodeDeterminationTcdKeyFieldValueField('TaxCodeDeterminationTCDKeyFieldValues', this);
}

export namespace TaxCodeDeterminationTcdKeyField {
  export function build(json: { [keys: string]: FieldType | TaxCodeDeterminationTcdKeyFieldValue }): TaxCodeDeterminationTcdKeyField {
    return createComplexType(json, {
      AbsId: (absId: number) => ({ absId: edmToTs(absId, 'Edm.Int32') }),
      Descr: (descr: string) => ({ descr: edmToTs(descr, 'Edm.String') }),
      Priority: (priority: number) => ({ priority: edmToTs(priority, 'Edm.Int32') }),
      KeyFld_1: (keyFld1: number) => ({ keyFld1: edmToTs(keyFld1, 'Edm.Int32') }),
      UDFTable_1: (udfTable1: string) => ({ udfTable1: edmToTs(udfTable1, 'Edm.String') }),
      UDFAlias_1: (udfAlias1: string) => ({ udfAlias1: edmToTs(udfAlias1, 'Edm.String') }),
      KeyFld_2: (keyFld2: number) => ({ keyFld2: edmToTs(keyFld2, 'Edm.Int32') }),
      UDFTable_2: (udfTable2: string) => ({ udfTable2: edmToTs(udfTable2, 'Edm.String') }),
      UDFAlias_2: (udfAlias2: string) => ({ udfAlias2: edmToTs(udfAlias2, 'Edm.String') }),
      KeyFld_3: (keyFld3: number) => ({ keyFld3: edmToTs(keyFld3, 'Edm.Int32') }),
      UDFTable_3: (udfTable3: string) => ({ udfTable3: edmToTs(udfTable3, 'Edm.String') }),
      UDFAlias_3: (udfAlias3: string) => ({ udfAlias3: edmToTs(udfAlias3, 'Edm.String') }),
      KeyFld_4: (keyFld4: number) => ({ keyFld4: edmToTs(keyFld4, 'Edm.Int32') }),
      UDFTable_4: (udfTable4: string) => ({ udfTable4: edmToTs(udfTable4, 'Edm.String') }),
      UDFAlias_4: (udfAlias4: string) => ({ udfAlias4: edmToTs(udfAlias4, 'Edm.String') }),
      TaxCodeDeterminationTCDKeyFieldValues: (taxCodeDeterminationTcdKeyFieldValues: TaxCodeDeterminationTcdKeyFieldValue) => ({ taxCodeDeterminationTcdKeyFieldValues: TaxCodeDeterminationTcdKeyFieldValue.build(taxCodeDeterminationTcdKeyFieldValues) })
    });
  }
}
