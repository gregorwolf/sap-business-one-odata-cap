/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import { MaterialRevaluationLine } from './MaterialRevaluationLine';
import { MaterialRevaluationDocumentReferences } from './MaterialRevaluationDocumentReferences';
import type { MaterialRevaluationApi } from './MaterialRevaluationApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { JournalEntries, JournalEntriesType } from './JournalEntries';
import { Users, UsersType } from './Users';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';

/**
 * This class represents the entity "MaterialRevaluation" of service "SAPB1".
 */
export class MaterialRevaluation<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements MaterialRevaluationType<T>
{
  /**
   * Technical entity name for MaterialRevaluation.
   */
  static _entityName = 'MaterialRevaluation';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the MaterialRevaluation entity
   */
  static _keys = ['DocEntry'];
  /**
   * Doc Num.
   * @nullable
   */
  docNum?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Doc Date.
   * @nullable
   */
  docDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Reference 1.
   * @nullable
   */
  reference1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference 2.
   * @nullable
   */
  reference2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Comments.
   * @nullable
   */
  comments?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Memo.
   * @nullable
   */
  journalMemo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Doc Time.
   * @nullable
   */
  docTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Series.
   * @nullable
   */
  series?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Tax Date.
   * @nullable
   */
  taxDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Doc Entry.
   */
  docEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Creation Date.
   * @nullable
   */
  creationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Update Date.
   * @nullable
   */
  updateDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Trans Num.
   * @nullable
   */
  transNum?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Reval Type.
   * @nullable
   */
  revalType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Revaluation Income Account.
   * @nullable
   */
  revaluationIncomeAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Revaluation Expense Account.
   * @nullable
   */
  revaluationExpenseAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data Source.
   * @nullable
   */
  dataSource?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Signature.
   * @nullable
   */
  userSignature?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Inflation Revaluation.
   * @nullable
   */
  inflationRevaluation?: BoYesNoEnum | null;
  /**
   * Card Code.
   * @nullable
   */
  cardCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Card Name.
   * @nullable
   */
  cardName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Material Revaluation Lines.
   * @nullable
   */
  materialRevaluationLines?: MaterialRevaluationLine<T>[] | null;
  /**
   * Material Revaluation Document References Collection.
   * @nullable
   */
  materialRevaluationDocumentReferencesCollection?:
    | MaterialRevaluationDocumentReferences<T>[]
    | null;
  /**
   * One-to-one navigation property to the {@link JournalEntries} entity.
   */
  journalEntry?: JournalEntries<T> | null;
  /**
   * One-to-one navigation property to the {@link Users} entity.
   */
  user?: Users<T> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartners} entity.
   */
  businessPartner?: BusinessPartners<T> | null;

  constructor(readonly _entityApi: MaterialRevaluationApi<T>) {
    super(_entityApi);
  }
}

export interface MaterialRevaluationType<
  T extends DeSerializers = DefaultDeSerializers
> {
  docNum?: DeserializedType<T, 'Edm.Int32'> | null;
  docDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  reference1?: DeserializedType<T, 'Edm.String'> | null;
  reference2?: DeserializedType<T, 'Edm.String'> | null;
  comments?: DeserializedType<T, 'Edm.String'> | null;
  journalMemo?: DeserializedType<T, 'Edm.String'> | null;
  docTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  series?: DeserializedType<T, 'Edm.Int32'> | null;
  taxDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  docEntry: DeserializedType<T, 'Edm.Int32'>;
  creationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  updateDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  transNum?: DeserializedType<T, 'Edm.Int32'> | null;
  revalType?: DeserializedType<T, 'Edm.String'> | null;
  revaluationIncomeAccount?: DeserializedType<T, 'Edm.String'> | null;
  revaluationExpenseAccount?: DeserializedType<T, 'Edm.String'> | null;
  dataSource?: DeserializedType<T, 'Edm.String'> | null;
  userSignature?: DeserializedType<T, 'Edm.Int32'> | null;
  inflationRevaluation?: BoYesNoEnum | null;
  cardCode?: DeserializedType<T, 'Edm.String'> | null;
  cardName?: DeserializedType<T, 'Edm.String'> | null;
  materialRevaluationLines?: MaterialRevaluationLine<T>[] | null;
  materialRevaluationDocumentReferencesCollection?:
    | MaterialRevaluationDocumentReferences<T>[]
    | null;
  journalEntry?: JournalEntriesType<T> | null;
  user?: UsersType<T> | null;
  businessPartner?: BusinessPartnersType<T> | null;
}
